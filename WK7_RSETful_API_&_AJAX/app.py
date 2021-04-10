
from flask import Flask, request, render_template, redirect, session, url_for, jsonify
from datetime import timedelta
from mysql_connect import selectUser, insertUser, updateUser
import json, requests, os

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

    signupUser = selectUser(username = username)

    if signupUser:
        message = f"帳號 { username } 已經被註冊"
        return redirect(url_for("error", message = message))
    else:
        insertUser(name = name, username = username, password = password)
        return redirect(url_for("index"))

@app.route("/signin", methods=["POST"])
def signin():
    username = request.form["username"] 
    password = request.form["password"]

    if (username == "" or password == ""):
        message = "帳號或密碼皆不得為空"
        return redirect(url_for("error", message = message))

    signinUser = selectUser(username = username, password = password)

    if signinUser:
        session["user"] = signinUser["name"]
        session["username"] = signinUser["username"]
        return redirect(url_for("member"))
    else:
        message = "帳號或密碼錯誤"
        return redirect(url_for("error", message = message))

@app.route("/member/")
def member():
    if "user" in session:
        username = session["username"]
        name = selectUser(username = username)["name"]
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

# /api/users issue!
@app.route("/api/users", methods=["GET"])
def getUsers():
    if "user" in session:
        username = request.args["username"]
        
        usernameSelected = selectUser(username = username)

        if usernameSelected:
            data = {
                "id": usernameSelected["id"],
                "name": usernameSelected["name"],
                "username": usernameSelected["username"]
                }
            return jsonify({ "data": data })
        return jsonify({ "data": None })
    return redirect(url_for("index"))

# POST 
@app.route("/api/user", methods=["POST", "GET"])
def postUser():
    if "user" in session:
        name = request.get_json()["name"]
        username = session["username"]
        
        updateUser(name, username)

        userInfo = selectUser(username = username)
        
        if name == userInfo["name"]:
            return jsonify({ "ok": True })
        return jsonify({ "error": True })
    return redirect(url_for("index"))

# =======================
# 以下為自訂的額外路徑(可略)
@app.route("/modal")
def modal():
    if "user" in session:
        return render_template("modal.html")
    return redirect(url_for("index"))

@app.route("/select")
def select():
    if "user" in session:
        return render_template("select.html")
    return redirect(url_for("index"))

@app.route("/textAdventure")
def textAdventure():
    if "user" in session:
        return render_template("textAdventure.html")
    return redirect(url_for("index"))

@app.route("/boxShadowGUI")
def boxShadowGUI():
    if "user" in session:
        return render_template("Box Shadow GUI.html")
    return redirect(url_for("index"))
# =======================

if __name__ == "__main__":
    app.run(port=3000)