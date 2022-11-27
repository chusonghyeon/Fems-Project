#! /usr/bin/python3

import datetime
import json     # json
import pymysql  # mariadb
from FEMS.Logger import Logger

_logger = Logger("FemsService")

#############################################################################################################################################
# 전력 데이터



async def GetLpDataDaily(startDate: str, endDate: str):
    try:
        # connection = pymysql.connect(host='146.56.183.172', port=3306, user='edu_usr', password='edu_pwd',
        #                              db='fems_service', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        with connection.cursor() as cursor:
            query = "select left(a.LpDate,8) as runDate, cast(sum(a.LpData) as char) as sumData " + \
                    "from " + \
                    "( " + \
                    "   select LpDate, LpData " + \
                    "   from Raw_KepcoDayLpData " + \
                    "   where left(LpDate,8) between " + "'" + startDate + "'" + " and " + "'" + endDate + "'" + \
                    ") a " +\
                    "group by left(a.LpDate, 8) " + \
                    "order by left(LpDate,8) ; "

            cursor.execute(query)
            # row_headers=[x[0] for x in cursor.description] #this will extract row headers
            rv = cursor.fetchall()
            # ress = str(rv)
            json_data = json.dumps(rv, indent=4)
            # print(f"{datetime.datetime.now()} : succeed to do 'GetLpDataDaily('{startDate}',{endDate})'")
            _logger.Info(
                f"succeed to do 'GetLpDataDaily('{startDate}',{endDate})'")
            return json_data

    except Exception as ex:
        # print(f"{datetime.datetime.now()} : error to do 'GetLpDataDaily('{startDate}',{endDate})'")
        _logger.Info(f"error to do 'GetLpDataDaily('{startDate}',{endDate})'")


async def GetLpDataHourly(runDate: str):
    try:
        # connection = pymysql.connect(host='146.56.183.172', port=3306, user='edu_usr', password='edu_pwd',
        #                              db='fems_service', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        
        with connection.cursor() as cursor:
            # query = "SELECT LpID, LpDate, cast(LpData as char) as LpData FROM wm_fems.Raw_KepcoDayLpData where LpDate > %s limit 2;"
            query = "select left(a.LpDate,10) as runDate, cast(sum(a.LpData) as char) as sumData " + \
                    "from " + \
                    "( " +\
                    "   select LpDate, LpData from Raw_KepcoDayLpData " + \
                    "   where left(LpDate,8) = " + "'" + runDate + "'" + \
                    ") a " +\
                    " group by left(LpDate,10) order by left(LpDate,10); "
            cursor.execute(query)
            # row_headers=[x[0] for x in cursor.description] #this will extract row headers
            rv = cursor.fetchall()
            # ress = str(rv)
            json_data = json.dumps(rv, indent=4)
            # print(f"{datetime.datetime.now()} : succeed to do 'GetLpDataHourly('{runDate}')'")
            _logger.Info(f"succeed to do 'GetLpDataHourly('{runDate}')'")
            return json_data

    except Exception as ex:
        # print(f"{datetime.datetime.now()} : error to do 'GetLpDataHourly('{runDate}'")
        _logger.Info(f"error to do 'GetLpDataHourly('{runDate}'")


#############################################################################################################################################
# AHU 데이터
async def GetAHUConfiguration():
    try:
        # connection = pymysql.connect(host='146.56.183.172', port=3306, user='edu_usr', password='edu_pwd',
        #                              db='fems_service', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        
        with connection.cursor() as cursor:
            # query = "SELECT LpID, LpDate, cast(LpData as char) as LpData FROM wm_fems.Raw_KepcoDayLpData where LpDate > %s limit 2;"
            query = "select * from Config_WMMachines order by data_id ;"
            cursor.execute(query)
            # row_headers=[x[0] for x in cursor.description] #this will extract row headers
            rv = cursor.fetchall()
            # ress = str(rv)
            json_data = json.dumps(rv, indent=4)
            # print(f"{datetime.datetime.now()} : succeed to do 'GetAHUConfiguration()'")
            _logger.Info(f"succeed to do 'GetAHUConfiguration()'")
            return json_data

    except Exception as ex:
        # print(f"{datetime.datetime.now()} : error to do 'GetAHUConfiguration()")
        _logger.Info(f"error to do 'GetAHUConfiguration()")


async def GetAHUInfos():
    try:
        # connection = pymysql.connect(host='146.56.183.172', port=3306, user='edu_usr', password='edu_pwd',
        #                              db='fems_service', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        
        with connection.cursor() as cursor:
            # query = "SELECT LpID, LpDate, cast(LpData as char) as LpData FROM wm_fems.Raw_KepcoDayLpData where LpDate > %s limit 2;"
            query = "select FAC_ID, FAC_NAME, FAC_TYPE, FAC_LOC, FAC_USE, " + \
                "cast(FAC_VOLTAGE as char) as FAC_VOLTAGE, cast(FAC_KW as char) as FAC_KW, cast(FAC_INV_CNT as char) as FAC_INV_CNT, FAC_DESC " +\
                "from INFO_FACILITY order by FAC_ID ; "
                
            cursor.execute(query)
            # row_headers=[x[0] for x in cursor.description] #this will extract row headers
            rv = cursor.fetchall()
            # ress = str(rv)
            json_data = json.dumps(rv, indent=4)
            # print(f"{datetime.datetime.now()} : succeed to do 'GetAHUInfo()'")
            _logger.Info(f"succeed to do 'GetAHUInfo()'")
            return json_data

    except Exception as ex:
        # print(f"{datetime.datetime.now()} : error to do 'GetAHUInfo()")
        _logger.Info(f"error to do 'GetAHUInfo()")


async def GetAHUInfo(FAC_NAME: str):
    try:
        # connection = pymysql.connect(host='146.56.183.172', port=3306, user='edu_usr', password='edu_pwd',
        #                              db='fems_service', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        
        with connection.cursor() as cursor:
            # query = "SELECT LpID, LpDate, cast(LpData as char) as LpData FROM wm_fems.Raw_KepcoDayLpData where LpDate > %s limit 2;"
            query = "select FAC_ID, FAC_NAME, FAC_TYPE, FAC_LOC, FAC_USE, " + \
                "cast(FAC_VOLTAGE as char) as FAC_VOLTAGE, cast(FAC_KW as char) as FAC_KW, cast(FAC_INV_CNT as char) as FAC_INV_CNT, FAC_DESC " +\
                "from INFO_FACILITY	" + \
                "where FAC_NAME = " + "'" + FAC_NAME + "' ;"
            cursor.execute(query)
            # row_headers=[x[0] for x in cursor.description] #this will extract row headers
            rv = cursor.fetchall()
            # ress = str(rv)
            json_data = json.dumps(rv, indent=4)
            # print(f"{datetime.datetime.now()} : succeed to do 'GetAHUInfo('{FAC_NAME}')'")
            _logger.Info(f"succeed to do 'GetAHUInfo('{FAC_NAME}')'")
            return json_data

    except Exception as ex:
        # print(f"{datetime.datetime.now()} : error to do 'GetAHUInfo('{FAC_NAME}')")
        _logger.Info(f"error to do 'GetAHUInfo('{FAC_NAME}')")


async def GetAHUData(ahu_id: str, startDate: str, endDate: str):
    try:
        # connection = pymysql.connect(host='146.56.183.172', port=3306, user='edu_usr', password='edu_pwd',
        #                              db='fems_service', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        
        with connection.cursor() as cursor:
            # query = "SELECT LpID, LpDate, cast(LpData as char) as LpData FROM wm_fems.Raw_KepcoDayLpData where LpDate > %s limit 2;"
            query = "select " +\
                "   ahu_id, run_datetime, " +\
                "   cast(ahu_set_temp as char) as ahu_set_temp , " +\
                "   cast(ahu_set_hum as char) as ahu_set_hum, " +\
                "   cast(ahu_ret_temp as char) as ahu_ret_temp, " +\
                "   cast(ahu_ret_hum as char) as ahu_ret_hum, " +\
                "   cast(ahu_sup_temp as char) as ahu_sup_temp, " +\
                "   cast(ahu_sup_hum as char) as ahu_sup_hum, " +\
                "   cast(ahu_out_temp as char) as ahu_out_temp, " +\
                "   cast(ahu_out_hum as char) as ahu_out_hum, " +\
                "   cast(ahu_comp1_run as char) as ahu_comp1_run, " +\
                "   cast(ahu_comp2_run as char) as ahu_comp2_run, " +\
                "   cast(ahu_warm_run as char) as ahu_warm_run, " +\
                "   cast(ahu_addhum_run as char) as ahu_addhum_run, " +\
                "   cast(ahu_cool_diff as char) as ahu_cool_diff, " +\
                "   cast(ahu_warm_diff as char) as ahu_warm_diff, " +\
                "   cast(ahu_addhum_diff as char) as ahu_addhum_diff, " +\
                "   cast(ahu_rmvhum_diff as char) as ahu_rmvhum_diff " +\
                "from Raw_WMAHUData \n" +\
                f"where ahu_id = '{ahu_id}' and left(run_datetime,8) between '{startDate}' and '{endDate}'" +\
                "order by run_datetime ;"
            cursor.execute(query)
            # row_headers=[x[0] for x in cursor.description] #this will extract row headers
            rv = cursor.fetchall()
            # ress = str(rv)
            json_data = json.dumps(rv, indent=4)
            # print(f"{datetime.datetime.now()} : succeed to do 'GetAHUData('{ahu_id}','{startDate}','{endDate}')'")
            _logger.Info(
                f"succeed to do 'GetAHUData('{ahu_id}','{startDate}','{endDate}')'")
            return json_data

    except Exception as ex:
        # print(f"{datetime.datetime.now()} : error to do 'GetAHUData('{ahu_id}','{startDate}','{endDate}')'")
        _logger.Info(
            f"error to do 'GetAHUData('{ahu_id}','{startDate}','{endDate}')'")


async def GetAHUSetSupData(runDate: str):
    try:
        # connection = pymysql.connect(host='146.56.183.172', port=3306, user='edu_usr', password='edu_pwd',
        #                              db='fems_service', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        # 내꺼 로컬 DB
        connection = pymysql.connect(host='localhost', port=3306, user='root', password='147852',
                                     db='FEMS', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
        
        
        with connection.cursor() as cursor:
            # query = "SELECT LpID, LpDate, cast(LpData as char) as LpData FROM wm_fems.Raw_KepcoDayLpData where LpDate > %s limit 2;"
            query = "select ahu_id, run_datetime, " +\
                "   cast(ahu_set_temp as char) as ahu_set_temp, " +\
                "   cast(ahu_sup_temp as char) as ahu_sup_temp " +\
                "from Raw_WMAHUData " +\
                f"where run_datetime = '{runDate}';"
            cursor.execute(query)
            # row_headers=[x[0] for x in cursor.description] #this will extract row headers
            rv = cursor.fetchall()
            # ress = str(rv)
            json_data = json.dumps(rv, indent=4)
            # message = f"{datetime.datetime.now()} : succeed to do 'GetAHUSetSupData('{runDate}')'"
            # print(message)
            message = f"succeed to do 'GetAHUSetSupData('{runDate}')'"
            _logger.Info(message)
            return json_data

    except Exception as ex:
        # print(
        #     f"{datetime.datetime.now()} : error to do 'GetAHUSetSupData('{runDate}')'")
        message = f"error to do 'GetAHUSetSupData('{runDate}')'"
        _logger.Info(message)
