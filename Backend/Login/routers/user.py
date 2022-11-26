from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from Login.repository import user

from Login import schemas, database, oauth2

# 경로지정, 태그로 구분
router = APIRouter(
    tags=['User']
)

# ID생성하는 API
@router.post('/create_id', response_model=schemas.UserBase)
async def create_user(request:schemas.UserBase, db:Session = Depends(database.get_db)):
    return user.create(request, db)


@router.get('/User', response_model=schemas.User)
def all(db:Session = Depends(database.get_db), current_user : schemas.User = Depends(oauth2.get_current_user)):
    return user.get_all(db)
