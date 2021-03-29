
from flask import Flask, request, render_template, redirect, session, url_for
from datetime import timedelta
from mysql_connect import websiteDB, webCursor, selectUser, insertUser
import os

app = Flask(__name__, static_folder="static", static_url_path="/static")

app.config["SECRET_KEY"] = os.urandom(24)
app.config["PERMANENT_SESSION_LIFETIME"] = timedelta(days = 1)

@app.route("/")
def index():
    if "user" in session:
        return redirect(url_for("member"))
    return render_template("index.html")

@app.route("/signup", methods=["POST"])
def checkSignup():
    name = request.form["name"]
    username = request.form["username"]
    password = request.form["password"]

    if (username == "" or name == "" or password == ""):
        message = "姓名、帳號或密碼皆不得為空"
        return redirect(url_for("error", message = message))

    signupUser = selectUser(username)

    if (signupUser and username != ""):
        message = f"帳號 { username } 已經被註冊"
        return redirect(url_for("error", message = message))

    if (signupUser == None and name != "" and password != ""):
        insertUser(name, username, password)
        return redirect(url_for("index"))

@app.route("/signin", methods=["POST"])
def signin():
    username = request.form["username"] 
    password = request.form["password"]

    if (username == "" or password == ""):
        message = "帳號或密碼皆不得為空"
        return redirect(url_for("error", message = message))

    signinUser = selectUser(username)

    if signinUser:
        name = signinUser["name"]
        usernamePass = signinUser["username"]
        passwordPass = signinUser["password"]

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
    if "user" in session:
        return redirect(url_for("member"))
    else:
        return render_template("error.html", message = message)


@app.route("/signout", methods=["GET"])
def signout():
    session.pop("user", None)
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(port=3000)