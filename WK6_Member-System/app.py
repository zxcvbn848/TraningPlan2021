
from flask import Flask, request, render_template, redirect, session, url_for, flash
from datetime import timedelta
import mysql.connector
import os

app = Flask(__name__, static_folder="static", static_url_path="/static")

app.config["SECRET_KEY"] = os.urandom(24)
app.config["PERMANENT_SESSION_LIFETIME"] = timedelta(days = 1)

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

@app.route("/")
def index():
    if "user" in session:
        return redirect(url_for("member"))
    else:
        return render_template("index.html")

@app.route("/signup", methods=["POST"])
def checkSignup():
    name = request.form["name"]
    username = request.form["username"]
    password = request.form["password"]

    signupUser = selectUser(username)
    if (signupUser != None):
        usernameData = signupUser["username"]
    else:
        usernameData = ""
   
    if (username != usernameData and name != "" and password != ""): 
        insertUser(name, username, password)
        return redirect(url_for("index"))

    if (username != "" and username == usernameData):
        message = f"帳號 {username} 已經被註冊"
        return redirect(url_for("error", message = message))

    if (username == "" or name == "" or password == ""):
        message = "姓名、帳號或密碼皆不得為空"
        return redirect(url_for("error", message = message))

@app.route("/signin", methods=["POST"])
def signin():
    username = request.form["username"] 
    password = request.form["password"]

    if (username != "" and password != ""):
        signinUser = selectUser(username)
    else:
        return redirect(url_for("index"))

    if signinUser:
        name = signinUser["name"]
        usernamePass = signinUser["username"]
        passwordPass = signinUser["password"]
    else:
        name = ""
        usernamePass = ""
        passwordPass = ""

    if (username == usernamePass and password == passwordPass): 
        session["user"] = name 
        return redirect(url_for("member"))
    else:
        message = "帳號或密碼錯誤"
        return redirect(url_for("error", message = message))

@app.route("/member/")
def member():
    if "user" in session:
        name = session["user"]
        return render_template("member.html", name = name)
    else:
        return redirect(url_for("index"))

@app.route("/error/")
def error():
    message = request.args["message"]
    if "user" not in session:
        return render_template("error.html", message = message)

    if "user" in session:
        return redirect(url_for("member"))

@app.route("/signout", methods=["GET"])
def signout():
    session.pop("user", None)
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(port=3000)