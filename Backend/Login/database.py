import sqlalchemy
import sqlalchemy.ext.declarative
import sqlalchemy.orm

DATABASE_URL = "mariadb+pymysql://root:1234@localhost:3306/FEMS"

engine = sqlalchemy.create_engine(DATABASE_URL, encoding="utf8")

SessionLocal = sqlalchemy.orm.sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = sqlalchemy.ext.declarative.declarative_base()

# 데이버 베이스 저장
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

