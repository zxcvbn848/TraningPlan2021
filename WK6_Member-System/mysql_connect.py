import mysql.connector

websiteDB = mysql.connector.connect(
    host = "localhost",
    port = 3306,
    user = "root",
    password = "Ilovedream303196",
    database = "website",
    charset = "utf8"
)

webCursor = websiteDB.cursor()

def selectUser(inputUser):
    webCursor.execute(
    """
    SELECT name, username, password
    FROM user
    WHERE username = %s
    """
    , (inputUser, ))

    webResult = webCursor.fetchone()
    if (webResult):
        userData = dict(zip(webCursor.column_names, webResult))
        return userData
    else:
        return None

def insertUser(name, username, password):
    sql_cmd = """
            INSERT INTO user(name, username, password) 
            VALUES (%s, %s, %s)
        """
    value = (name, username, password)
    webCursor.execute(sql_cmd, value)

    websiteDB.commit()