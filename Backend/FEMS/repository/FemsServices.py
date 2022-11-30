#! /usr/bin/python3

import datetime
import json     # json
import pymysql  # mariadb
from FEMS.Logger import Logger

_logger = Logger("FemsService")


#################################################################################################################################################

#                                                       메인 페이지

#################################################################################################################################################

# ML 전력량 예측












# 설비 정보(공조기 이름, 위치, 사용하는 곳 표시)
async def Get_AHU_Info(FAC_NAME: str):
    try:       
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        
        with connection.cursor() as cursor:
            query = "select FAC_ID, FAC_NAME, FAC_LOC, FAC_USE, " + \
                "cast(FAC_VOLTAGE as char) as FAC_VOLTAGE, cast(FAC_KW as char) as FAC_KW, cast(FAC_INV_CNT as char) as FAC_INV_CNT " +\
                "from INFO_FACILITY	" + \
                "where FAC_NAME = " + "'" + FAC_NAME + "' ;"
            cursor.execute(query)
            rv = cursor.fetchall()
            json_data = json.dumps(rv, indent=4)
            _logger.Info(f"succeed to do 'Get_AHU_Info('{FAC_NAME}')'")
            return json_data

    except Exception as ex:
        _logger.Info(f"error to do 'Get_AHU_Info('{FAC_NAME}')")
        
# 일별로 공조기 전력량 데이터 추출
async def Get_LpData_glance_Daily(startDate: str, endDate: str):
    try:
        # 내꺼 로컬 DB 
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        with connection.cursor() as cursor:
            query = "select left(a.LpDate,8) as runDate, cast(round(sum(a.LpData),2) as char) as sumData  " + \
                    "from " + \
                    "( " + \
                    "   select LpDate, LpData " + \
                    "   from Raw_KepcoDayLpData " + \
                    "   where left(LpDate,8) between " + "'" + startDate + "'" + " and " + "'" + endDate + "'" + \
                    ") a " +\
                    "group by left(a.LpDate, 8) " + \
                    "order by left(LpDate,8) ; "

            cursor.execute(query)
            rv = cursor.fetchall()
            json_data = json.dumps(rv, indent=4)
            _logger.Info(
                f"succeed to do 'Get_LpData_glance_Daily('{startDate}',{endDate})'")
            return json_data

    except Exception as ex:
        _logger.Info(f"error to do 'Get_LpData_glance_Daily('{startDate}',{endDate})'")
        

# 월별로 공조기 전력량 데이터 추출
async def Get_LpData_monthly_Daily(startDate: str, endDate: str):
    try:
              
        # 내꺼 로컬 DB 연결
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        with connection.cursor() as cursor:
            query = "select left(a.LpDate,6) as runDate, cast(round(sum(a.LpData),2) as char) as sumData " + \
                    "from " + \
                    "( " + \
                    "   select LpDate, LpData " + \
                    "   from Raw_KepcoDayLpData " + \
                    "   where left(LpDate,6) between " + "'" + startDate + "'" + " and " + "'" + endDate + "'" + \
                    ") a " +\
                    "group by left(a.LpDate, 6) " + \
                    "order by left(LpDate,6) ; "

            cursor.execute(query)
            rv = cursor.fetchall()
            json_data = json.dumps(rv, indent=4)
            _logger.Info(
                f"succeed to do 'Get_LpData_monthly_Daily('{startDate}',{endDate})'")
            return json_data

    except Exception as ex:
        _logger.Info(f"error to do 'Get_LpData_monthly_Daily('{startDate}',{endDate})'")


# 연별로 공조기 전력량 데이터 추출
async def Get_LpData_by_year(startDate: str, endDate: str):
    try:
              
        # 내꺼 로컬 DB 연결
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        with connection.cursor() as cursor:
            query = "select left(a.LpDate,4) as runDate, cast(round(sum(a.LpData),2) as char) as sumData " + \
                    "from " + \
                    "( " + \
                    "   select LpDate, LpData " + \
                    "   from Raw_KepcoDayLpData " + \
                    "   where left(LpDate,4) between " + "'" + startDate + "'" + " and " + "'" + endDate + "'" + \
                    ") a " +\
                    "group by left(a.LpDate, 4) " + \
                    "order by left(LpDate,4) ; "
            cursor.execute(query)
            rv = cursor.fetchall()
            json_data = json.dumps(rv, indent=4)
            _logger.Info(
                f"succeed to do 'Get_LpData_by_year('{startDate}',{endDate})'")
            return json_data

    except Exception as ex:
        _logger.Info(f"error to do 'Get_LpData_by_year('{startDate}',{endDate})'")

#############################################################################################################################################

#                                                          전력량 페이지(시간별, 일별, 월별) 

#############################################################################################################################################

# 공조기 시간별 전력량
async def Get_AHU_KWh_Hourly_Data(inv_id: str, startDate: str, endDate: str):
    try:   
           
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        with connection.cursor() as cursor:
            query = " select " +\
                " inv_id, left(run_datetime,12) as rundate," +\
                " cast(round(inv_kWh,2) as char) as inv_kWh " +\
                "from raw_wminvdata_addkWh \n" +\
                f"where inv_id = '{inv_id}' and left(run_datetime, 8) between '{startDate}' and '{endDate}'" +\
                "group by left(run_datetime, 12) " + \
                "order by left(run_datetime, 12);"
            cursor.execute(query)
            rv = cursor.fetchall()
            json_data = json.dumps(rv, indent=4)
            _logger.Info(
                f"succeed to do 'Get_AHU_KWh_Hourly_Data('{inv_id}','{startDate}','{endDate}')'")
            return json_data

    except Exception as ex:
        _logger.Info(
            f"error to do 'Get_AHU_KWh_Hourly_Data('{inv_id}','{startDate}','{endDate}')'")
        
# 공조기 일별 전력량
async def Get_AHU_KWh_glance_Data(inv_id: str, startDate: str, endDate: str):
    try:   
           
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        with connection.cursor() as cursor:
            query = " select " +\
                " inv_id, left(run_datetime,8) as rundate," +\
                " cast(round(inv_kWh,2) as char) as inv_kWh " +\
                "from raw_wminvdata_addkWh \n" +\
                f"where inv_id = '{inv_id}' and left(run_datetime, 6) between '{startDate}' and '{endDate}'" +\
                "group by left(run_datetime, 8) " + \
                "order by left(run_datetime, 8);"
            cursor.execute(query)
            rv = cursor.fetchall()
            json_data = json.dumps(rv, indent=4)
            _logger.Info(
                f"succeed to do 'Get_AHU_KWh_glance_Data('{inv_id}','{startDate}','{endDate}')'")
            return json_data

    except Exception as ex:
        _logger.Info(
            f"error to do 'Get_AHU_KWh_glance_Data('{inv_id}','{startDate}','{endDate}')'")

# 공조기 월별 전력량
async def Get_AHU_KWh_monthly_Data(inv_id: str, startDate: str, endDate: str):
    try:   
           
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        with connection.cursor() as cursor:
            query = " select " +\
                " inv_id, left(run_datetime,6) as rundate," +\
                " cast(round(inv_kWh,2) as char) as inv_kWh " +\
                "from raw_wminvdata_addkWh \n" +\
                f"where inv_id = '{inv_id}' and left(run_datetime, 4) between '{startDate}' and '{endDate}'" +\
                "group by left(run_datetime, 6) " + \
                "order by left(run_datetime, 6);"
            cursor.execute(query)
            rv = cursor.fetchall()
            json_data = json.dumps(rv, indent=4)
            _logger.Info(
                f"succeed to do 'Get_AHU_KWh_monthly_Data('{inv_id}','{startDate}','{endDate}')'")
            return json_data

    except Exception as ex:
        _logger.Info(
            f"error to do 'Get_AHU_KWh_monthly_Data('{inv_id}','{startDate}','{endDate}')'")

#############################################################################################################################################

#                                                          온도 페이지(시간별, 일별, 월별) 

#############################################################################################################################################

# 공조기 시간별 온도
async def Get_AHU_temp_Hourly_Data(ahu_id: str, startDate: str, endDate: str):
    try:   
           
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        with connection.cursor() as cursor:
            query = " select " +\
                " ahu_id, left(run_datetime,12) as rundate," +\
                " cast(round(avg(ahu_set_temp),2) as char) as ahu_set_temp, " +\
                " cast(round(avg(ahu_ret_temp),2) as char) as ahu_ret_temp, " +\
                " cast(round(avg(ahu_sup_temp),2) as char) as ahu_sup_temp, " +\
                " cast(round(avg(ahu_out_temp),2) as char) as ahu_out_temp  " +\
                "from raw_wmahudata_temp \n" +\
                f"where ahu_id = '{ahu_id}' and left(run_datetime, 8) between '{startDate}' and '{endDate}'" +\
                "group by left(run_datetime, 12) " + \
                "order by left(run_datetime, 12);"
            cursor.execute(query)
            rv = cursor.fetchall()
            json_data = json.dumps(rv, indent=4)
            _logger.Info(
                f"succeed to do 'Get_AHU_temp_Hourly_Data('{ahu_id}','{startDate}','{endDate}')'")
            return json_data

    except Exception as ex:
        _logger.Info(
            f"error to do 'Get_AHU_temp_Hourly_Data('{ahu_id}','{startDate}','{endDate}')'")
        
# 공조기 일별 온도
async def Get_AHU_temp_glance_Data(ahu_id: str, startDate: str, endDate: str):
    try:   
           
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        with connection.cursor() as cursor:
            query = " select " +\
                " ahu_id, left(run_datetime,8) as rundate," +\
                " cast(round(avg(ahu_set_temp),2) as char) as ahu_set_temp, " +\
                " cast(round(avg(ahu_ret_temp),2) as char) as ahu_ret_temp, " +\
                " cast(round(avg(ahu_sup_temp),2) as char) as ahu_sup_temp, " +\
                " cast(round(avg(ahu_out_temp),2) as char) as ahu_out_temp  " +\
                "from raw_wmahudata_temp \n" +\
                f"where ahu_id = '{ahu_id}' and left(run_datetime, 6) between '{startDate}' and '{endDate}'" +\
                "group by left(run_datetime, 8) " + \
                "order by left(run_datetime, 8);"
            cursor.execute(query)
            rv = cursor.fetchall()
            json_data = json.dumps(rv, indent=4)
            _logger.Info(
                f"succeed to do 'Get_AHU_temp_glance_Data('{ahu_id}','{startDate}','{endDate}')'")
            return json_data

    except Exception as ex:
        _logger.Info(
            f"error to do 'Get_AHU_temp_glance_Data('{ahu_id}','{startDate}','{endDate}')'")

# 공조기 월별 온도
async def Get_AHU_temp_monthly_Data(ahu_id: str, startDate: str, endDate: str):
    try:   
           
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        with connection.cursor() as cursor:
            query = " select " +\
                " ahu_id, left(run_datetime,6) as rundate," +\
                " cast(round(avg(ahu_set_temp),2) as char) as ahu_set_temp, " +\
                " cast(round(avg(ahu_ret_temp),2) as char) as ahu_ret_temp, " +\
                " cast(round(avg(ahu_sup_temp),2) as char) as ahu_sup_temp, " +\
                " cast(round(avg(ahu_out_temp),2) as char) as ahu_out_temp  " +\
                "from raw_wmahudata_temp \n" +\
                f"where ahu_id = '{ahu_id}' and left(run_datetime, 4) between '{startDate}' and '{endDate}'" +\
                "group by left(run_datetime, 6) " + \
                "order by left(run_datetime, 6);"
            cursor.execute(query)
            rv = cursor.fetchall()
            json_data = json.dumps(rv, indent=4)
            _logger.Info(
                f"succeed to do 'Get_AHU_temp_monthly_Data('{ahu_id}','{startDate}','{endDate}')'")
            return json_data

    except Exception as ex:
        _logger.Info(
            f"error to do 'Get_AHU_temp_monthly_Data('{ahu_id}','{startDate}','{endDate}')'")

#############################################################################################################################################

#                                                          습도도 페이지(시간별, 일별, 월별) 

#############################################################################################################################################

# 공조기 시간별 습도
async def Get_AHU_hum_Hourly_Data(ahu_id: str, startDate: str, endDate: str):
    try:   
           
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        with connection.cursor() as cursor:
            query = " select " +\
                " ahu_id, left(run_datetime,12) as rundate," +\
                " cast(round(avg(ahu_set_hum),2) as char) as ahu_set_hum, " +\
                " cast(round(avg(ahu_ret_hum),2) as char) as ahu_ret_hum, " +\
                " cast(round(avg(ahu_sup_hum),2) as char) as ahu_sup_hum, " +\
                " cast(round(avg(ahu_out_hum),2) as char) as ahu_out_hum  " +\
                "from raw_wmahudata_hum \n" +\
                f"where ahu_id = '{ahu_id}' and left(run_datetime, 8) between '{startDate}' and '{endDate}'" +\
                "group by left(run_datetime, 12) " + \
                "order by left(run_datetime, 12);"
            cursor.execute(query)
            rv = cursor.fetchall()
            json_data = json.dumps(rv, indent=4)
            _logger.Info(
                f"succeed to do 'Get_AHU_hum_Hourly_Data('{ahu_id}','{startDate}','{endDate}')'")
            return json_data

    except Exception as ex:
        _logger.Info(
            f"error to do 'Get_AHU_hum_Hourly_Data('{ahu_id}','{startDate}','{endDate}')'")

# 공조기 일별 습도
async def Get_AHU_hum_glance_Data(ahu_id: str, startDate: str, endDate: str):
    try:   
           
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        with connection.cursor() as cursor:
            query = " select " +\
                " ahu_id, left(run_datetime,8) as rundate," +\
                " cast(round(avg(ahu_set_hum),2) as char) as ahu_set_hum, " +\
                " cast(round(avg(ahu_ret_hum),2) as char) as ahu_ret_hum, " +\
                " cast(round(avg(ahu_sup_hum),2) as char) as ahu_sup_hum, " +\
                " cast(round(avg(ahu_out_hum),2) as char) as ahu_out_hum  " +\
                "from raw_wmahudata_hum \n" +\
                f"where ahu_id = '{ahu_id}' and left(run_datetime, 6) between '{startDate}' and '{endDate}'" +\
                "group by left(run_datetime, 8) " + \
                "order by left(run_datetime, 8);"
            cursor.execute(query)
            rv = cursor.fetchall()
            json_data = json.dumps(rv, indent=4)
            _logger.Info(
                f"succeed to do 'Get_AHU_hum_glance_Data('{ahu_id}','{startDate}','{endDate}')'")
            return json_data

    except Exception as ex:
        _logger.Info(
            f"error to do 'Get_AHU_hum_glance_Data('{ahu_id}','{startDate}','{endDate}')'")

# 공조기 월별 습도
async def Get_AHU_hum_monthly_Data(ahu_id: str, startDate: str, endDate: str):
    try:   
           
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        with connection.cursor() as cursor:
            query = " select " +\
                " ahu_id, left(run_datetime,6) as rundate," +\
                " cast(round(avg(ahu_set_hum),2) as char) as ahu_set_hum, " +\
                " cast(round(avg(ahu_ret_hum),2) as char) as ahu_ret_hum, " +\
                " cast(round(avg(ahu_sup_hum),2) as char) as ahu_sup_hum, " +\
                " cast(round(avg(ahu_out_hum),2) as char) as ahu_out_hum  " +\
                "from raw_wmahudata_hum \n" +\
                f"where ahu_id = '{ahu_id}' and left(run_datetime, 4) between '{startDate}' and '{endDate}'" +\
                "group by left(run_datetime, 6) " + \
                "order by left(run_datetime, 6);"
            cursor.execute(query)
            rv = cursor.fetchall()
            json_data = json.dumps(rv, indent=4)
            _logger.Info(
                f"succeed to do 'Get_AHU_hum_monthly_Data('{ahu_id}','{startDate}','{endDate}')'")
            return json_data

    except Exception as ex:
        _logger.Info(
            f"error to do 'Get_AHU_hum_monthly_Data('{ahu_id}','{startDate}','{endDate}')'")
