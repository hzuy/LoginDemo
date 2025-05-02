from flask import Flask
from routes import routes
from flask_sqlalchemy import SQLAlchemy
from extensions import db 

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:Nhd4231.@127.0.0.1:8001/laptrinhweb?charset=utf8mb4"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True
db.init_app(app)

app.register_blueprint(routes)

    
if __name__ == '__main__':
    # app.run(host='0.0.0.0', debug=True)  # Cho phép truy cập từ mọi IP
    app.run(debug=True,port=8001)