from flask import Flask, request, jsonify
from wiki import summarizePlace

app = Flask(__name__)

@app.route('/summary/')
def summarize():
    res = summarizePlace(str(request.args.get('name')))
    return jsonify({"summary": res[1], "url": res[0]})