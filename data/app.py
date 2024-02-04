from flask import Flask, request, jsonify
from wiki import summarizePlace, getImgUrl, getUrl
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

@app.route('/summary/')
def summarize():
    n = str(request.args.get('name'))
    city = str(request.args.get('city'))
    summary = summarizePlace(n)
    wikiUrl = getUrl(n)
    imgUrl = getImgUrl(n, wikiUrl)
    data = None
    if os.path.getsize("../src/data.json") > 0:
        with open("../src/data.json", 'r') as f:
            data = json.load(f)
    else:
        data = []

    flag = False
    for c in data:
        if c["city"] == city:
            c["places"].append({"name": n, "description": summary, "wikiUrl": wikiUrl, "imageUrl": imgUrl})
            flag = True
            break
    if not flag:
        data.append({"city": city, "places": [{"name": n, "description": summary, "wikiUrl": wikiUrl, "imageUrl": imgUrl}]})
    os.remove("../src/data.json")
    with open("../src/data.json", "w") as f:
        json.dump(data, f, indent=2)
        
    return jsonify({"name": n, "description": summary, "wikiUrl": wikiUrl, "imageUrl": imgUrl})