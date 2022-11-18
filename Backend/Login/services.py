import jwt
import sqlalchemy.orm
import passlib.hash

from Login import database
from Login import models
from Login import schemas
import fastapi
import fastapi.security

# JWT 설정하기
oauth2schema = fastapi.security.OAuth2PasswordBearer(tokenUrl="/api/token")
JWT_SECRET = "myjwtsecret"


# *필수*
# 1. 터미널에서 여기 경로를 입력한다 (cd /경로/경로/login)
# 2. 터미널에 python를 실행한다.
# 3. import services 실행 -> 좌측에 __pycache__ 생성 즉, python 언어를 컴파일해 놓은 파일이다
# 4. services.create_database() 실행하면 Dbeaver나 MariaDB에 들어가면 해당 데이터베이스 안에 테이블이 생성이 된다
# 5. 다시 Backend 파일로 돌아간다.



# 데이터 베이스 연동하고 테이블 생성하는 곳
def create_database():
    return database.Base.metadata.create_all(bind=database.engine)


# 데이버 베이스 저장
def get_db():
    db = database.SeeionLocal()
    try:
        yield db
    finally:
        db.close()


# LoginID 데이터 베이스에 저장
async def create_user(user: schemas.UserCreate, db: sqlalchemy.orm.Session):
    user_obj = models.User(LoginID = user.LoginID, hashed_password = passlib.hash.bcrypt.hash(user.hashed_password))
    db.add(user_obj)
    db.commit()
    db.refresh(user_obj)
    return user_obj

# LoginID 생성하기
async def get_user_by_ID(LoginID: str, db: sqlalchemy.orm.Session):
    return db.query(models.User).filter(models.User.LoginID == LoginID).first()



# 로그인해서 확인하기
async def authenticate_user(LoginID: str, password: str, db: sqlalchemy.orm.Session):
    user = await get_user_by_ID(db=db, LoginID=LoginID)
    
    if not user:
        return False
    
    if not user.verify_password(password):
        return False
    
    return user

# Token 발급하기
async def create_token(user: models.User):
    user_obj = schemas.User.from_orm(user)
    
    token = jwt.encode(user_obj.dict(), JWT_SECRET)
    
    return dict(access_token = token, token_type = "bearer")


# 발급한 Token내용 불러오기
async def get_current_user(db: sqlalchemy.orm.session = fastapi.Depends(get_db), token: str = fastapi.Depends(oauth2schema)):
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        user = db.query(models.User).get(payload["id"])
    except:
        raise fastapi.HTTPException(status_code=401, detail="Invalid ID or Password")
    
    return schemas.User.from_orm(user)