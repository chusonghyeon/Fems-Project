import fastapi
import fastapi.security

import sqlalchemy.orm

from Login.database import engine
from Login import services
from Login import schemas
from Login import models

from FEMS import FemsServices

from fastapi import FastAPI, Response
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# adding cors urls
origins = [
    "https://localhost:3000"
]

# add middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)


# 실행 구문 : uvicorn main:app --reload
# 화면에서 local주소 뒤에 /docs 입력 후 작업

@app.get("/")
async def welcome():
    return "Wello come"    

# Token를 부여할 ID와 Password 지정 // 이 기능 필요없음
@app.post("/Login")
async def create_user(user: schemas.UserCreate, db: sqlalchemy.orm.Session = fastapi.Depends(services.get_db)):
    db_user = await services.get_user_by_ID(user.LoginID, db)
    if db_user:
        raise fastapi.HTTPException(status_code=400, detail="ID already in use") # 아이디 있는지없는지 확인이라 없어도 되는 기능
    
    user = await services.create_user(user, db)
    
    return await services.create_token(user)

# ID password 확인 후 Token 부여하기 , user(ID, Password)가 없으면 부여하지 못한다.  , 이기능이 핵심
# 메인페이지로 토큰들고 넘어가게 , form_data에서 id와 비번을 가져올수 있다.
@app.post("/Token")
async def generate_token(form_data : fastapi.security.OAuth2PasswordRequestForm = fastapi.Depends(), db: sqlalchemy.orm.Session = fastapi.Depends(services.get_db)):
    user = await services.authenticate_user(form_data.username, form_data.password, db)
    
    # 없는 아이디면 뜨는 경고
    if not user:
        raise fastapi.HTTPException(status_code=401, detail="Invalid credentials")
    
    return await services.create_token(user)

# 부여받은 ID 보여주기 , main page 로 넘어가게,, 아마 다른 페이지 이동할 때도 유사하게 사용 예정
# user: schemas.User = fastapi.Depends(services.get_current_user) 이부분이 인증요구인듯
@app.get("/User", response_model=schemas.User)
async def get_user(user: schemas.User = fastapi.Depends(services.get_current_user)):
    return user


'''

FEMS

'''
# 전력량 - 일별 데이터
@app.get("/GetLpDataDaily")
async def GetLpDataDaily(startDate: str, endDate: str):
    result = await FemsServices.GetLpDataDaily(startDate, endDate)
    return Response(content=result, media_type="application/json")

# 전력량 - 시간별 데이터
@app.get("/GetLpDataHourly")
async def GetLpDataHourly(runDate: str):
    result = await FemsServices.GetLpDataHourly(runDate)
    return Response(content=result, media_type="application/json")

# AHU 구성
@app.get("/GetAHUConfiguration")
async def GetAHUConfiguration():
    result = await FemsServices.GetAHUConfiguration()
    return Response(content=result, media_type="application/json")

# AHU 모든 정보
@app.get("/GetAHUInfos")
async def GetAHUInfos():
    result = await FemsServices.GetAHUInfos()
    return Response(content=result, media_type="application/json")

# 개별 AHU 정보
@app.get("/GetAHUInfo")
async def GetAHUInfo(FAC_NAME: str):
    result = await FemsServices.GetAHUInfo(FAC_NAME)
    return Response(content=result, media_type="application/json")

# AHU Data 조회
@app.get("/GetAHUData")
async def GetAHUData(ahu_id: str, startDate: str, endDate: str):
    result = await FemsServices.GetAHUData(ahu_id, startDate, endDate)
    return Response(content=result, media_type="application/json")

# Dashboard 
@app.get("/GetAHUSetSupData")
async def GetAHUSetSupData(runDate: str):
    result = await FemsServices.GetAHUSetSupData(runDate)
    return Response(content=result, media_type="application/json")