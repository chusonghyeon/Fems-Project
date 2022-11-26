from pydantic import BaseModel
from typing import Optional


# API에서 보여주기 위한 정의 
class UserBase(BaseModel):
    LoginID : str
    hashed_password : str
    
    class Config:
        orm_mode = True

class User(BaseModel):
    LoginID : Optional[str]
    hashed_password : Optional[str]
        
    class Config:
        orm_mode = True

    
# Token Schemas
class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    LoginID: Optional[str] = None

