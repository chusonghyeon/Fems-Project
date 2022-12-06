import json
import pymysql
from FEMS.Logger import Logger

_logger = Logger("MLService")



# ML예측 값 출력
def GET_ML_data():
    try:
        
        # connection = pymysql.connect(host="database-fems.cenfcmvt9ni5.ap-northeast-2.rds.amazonaws.com", port=3306, user="project", password="project26**",
        #                              db='fems', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        connection = pymysql.connect(host= 'localhost', port=3306, user='root', password='1234',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        with connection.cursor() as cursor:
            query = " select " +\
                    " left(run_datetime,8) as rundate, cast(round(yhat, 2) as char) as Y_pred " +\
                    "from yhat \n" +\
                    "order by left(run_datetime, 8);"
            cursor.execute(query)
            rv = cursor.fetchall()
            json_data = json.dumps(rv, indent=4)
            _logger.Info(f"succed to do 'Get_ML_Data'")
            return json_data
    
    except Exception as ex:
        _logger.Info(f"error to do 'Get_ML_Data'")
    


