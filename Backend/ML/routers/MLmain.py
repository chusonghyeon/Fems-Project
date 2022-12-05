from ML.repository import MLServices

from fastapi import APIRouter
from fastapi import Response

router = APIRouter(
    tags=['ML']
)


# ML 예측
@router.get("/ML")
def Get_ML():
    result = MLServices.GET_ML_data()
    return Response(content=result, media_type="application/json")