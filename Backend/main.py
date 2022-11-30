from database import engine
 
from Login import models

from Login.routers import user, authentication
from FEMS.routers import femsmain

from fastapi import FastAPI
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

'''

User

'''
# Router에 저장되어 있는 API주소 불러오기
# 실제 API주소는 Router 안에 있다.
app.include_router(authentication.router)
app.include_router(user.router)


'''

FEMS

'''
#  Router에 저장되어 있는 API주소 불러오기
# 실제 API주소는 Router 안에 있다.
app.include_router(femsmain.router)