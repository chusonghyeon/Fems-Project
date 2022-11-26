from fastapi import HTTPException, status, Depends
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from Login import models, schemas, hashing, JWTtoken, database, oauth2
import jwt

# ID와 Hashed_PASSWORd 생성하기
# DB에 저장하기
def create(request: schemas.UserBase, db: Session):
    User = models.User(LoginID = request.LoginID, hashed_password = hashing.Hash.bcrypt(request.hashed_password))
    db.add(User)
    db.commit()
    db.refresh(User)
    return User


def get_all(db : Session):
    users = db.query(models.User).all()
    return users
    


