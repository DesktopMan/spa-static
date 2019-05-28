from flask import Flask, send_from_directory

app = Flask(__name__)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all():
    return send_from_directory('static', 'index.html')
