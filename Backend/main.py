from database import engine
 
from Login import models

from FEMS import FemsServices

from Login.routers import user, authentication

from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# models에 저장되어 있는 Table 생성
models.Base.metadata.create_all(bind=engine)

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


# Router에 저장되어 있는 API주소 불러오기
# 실제 API주소는 Router 안에 있다.
app.include_router(authentication.router)
app.include_router(user.router)



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