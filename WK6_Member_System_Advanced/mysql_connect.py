
import mysql.connector

websiteDB = mysql.connector.connect(
    host = "localhost",
    port = 3306,
    user = "root",
    password = "***",
    database = "website",
    charset = "utf8"
)

webCursor = websiteDB.cursor()

def selectUser(**kwargs):
    sql_cmd = """
                SELECT * 
                FROM user 
                WHERE """
    
    for key in kwargs:
        sql_cmd += f"{ key } = '{ kwargs[key] }' and "

    sql_cmd = sql_cmd[:-5] # 扣除掉 " and "

    webCursor.execute(sql_cmd)

    webResult = webCursor.fetchone()

    if webResult:
        userData = dict(zip(webCursor.column_names, webResult))
        return userData
    else:
        return None

def insertUser(**kwargs):
    insertColumn = '' 
    insertValue = ''

    for key in kwargs:
        insertColumn += f"{ key }, "
        insertValue += f"'{ kwargs[key] }', "

    insertColumn = insertColumn[:-2]
    insertValue = insertValue[:-2]

    sql_cmd = f"""
            INSERT INTO user ({ insertColumn })
            VALUES ({ insertValue })
            """ 

    webCursor.execute(sql_cmd)

    websiteDB.commit()
# ====================
# Fixed parameters:

# def selectUser(inputUser):
#     webCursor.execute(
#     """
#     SELECT name, username, password
#     FROM user
#     WHERE username = %s
#     """
#     , (inputUser, ))

#     webResult = webCursor.fetchone()
#     if (webResult):
#         userData = dict(zip(webCursor.column_names, webResult))
#         return userData
#     else:
#         return None
    
# def insertUser(name, username, password):
#     sql_cmd = """
#             INSERT INTO user (name, username, password) 
#             VALUES (%s, %s, %s)
#             """ 
#     value = (name, username, password)

#     webCursor.execute(sql_cmd, value)

#     websiteDB.commit()
