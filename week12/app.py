from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    name = "wei"
    department = "學生"
    introduction = "我正在學習網頁程式設計，希望能做出簡單又實用的網站。"
    interests = ["網頁設計", "程式設計", "音樂"]
    courses = ["HTML 與 CSS", "JavaScript", "Flask"]

    return render_template(
        "index.html",
        name=name,
        department=department,
        introduction=introduction,
        interests=interests,
        courses=courses,
    )


if __name__ == "__main__":
    app.run(debug=True)
