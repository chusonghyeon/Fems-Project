from typing import List
import fastapi
import fastapi.security

import sqlalchemy.orm

from Login import services
from Login import schemas

app = fastapi.FastAPI()


# 실행 구문 : uvicorn main:app --reload
# 화면에서 local주소 뒤에 /docs 입력 후 작업

# Token를 부여할 ID와 Password 지정
@app.post("/api/users")
async def create_user(user: schemas.UserCreate, db: sqlalchemy.orm.Session = fastapi.Depends(services.get_db)):
    db_user = await services.get_user_by_ID(user.LoginID, db)
    if db_user:
        raise fastapi.HTTPException(status_code=400, detail="ID already in use")
    
    user = await services.create_user(user, db)
    
    return await services.create_token(user)

# ID password 확인 후 Token 부여하기 , user(ID, Password)가 없으면 부여하지 못한다.
@app.post("/api/token")
async def generate_token(form_data : fastapi.security.OAuth2PasswordRequestForm = fastapi.Depends(), db: sqlalchemy.orm.Session = fastapi.Depends(services.get_db)):
    user = await services.authenticate_user(form_data.username, form_data.password, db)
    
    if not user:
        raise fastapi.HTTPException(status_code=401, detail="Invalid credentials")
    
    return await services.create_token(user)

# 부여받은 ID 보여주기
@app.get("/api/users/me", response_model=schemas.User)
async def get_user(user: schemas.User = fastapi.Depends(services.get_current_user)):
    return user