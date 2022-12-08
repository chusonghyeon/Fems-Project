import os
import json
import pymysql
from FEMS.Logger import Logger
_logger = Logger("MLService")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SECRET_FILE = os.path.join(BASE_DIR, 'secrets.json')
secrets = json.loads(open(SECRET_FILE).read())

DB = secrets['DB']
USER = DB['user']
PASSWORD = DB['password']
HOST = DB['host']
PORT = DB['port']
DATABASE = DB['database']

# ML예측 값 출력
def GET_ML_data():
    try:
        
        # DB서버        
        connection = pymysql.connect(host= DB['host'], port= 3306, user= DB['user'], password= DB['password'],
                                     db= DB['database'], charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        with connection.cursor() as cursor:
            query = " select " +\
                    " left(run_datetime,6) as rundate, " +\
                    " cast(round(sum(y),2) as char) as Y_real_Data, " +\
                    " cast(round(sum(yhat),2) as char) as Y_pred_Data " +\
                    " from yhat123 \n" +\
                    " where left(run_datetime,4) ='2022' " +\
                    " group by left(run_datetime, 6) " +\
                    " order by left(run_datetime, 6);"
            cursor.execute(query)
            rv = cursor.fetchall()
            json_data = json.dumps(rv, indent=4)
            _logger.Info(f"succed to do 'Get_ML_Data'")
            
            return json_data
    except Exception as ex:
        print(query)
        _logger.Info(f"error to do 'Get_ML_Data'")