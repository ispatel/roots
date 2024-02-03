from flask import Flask, request, jsonify
from wiki import summarizePlace, getImgUrl, getUrl
import json
import os

app = Flask(__name__)

@app.route('/summary/')
def summarize():
    n = str(request.args.get('name'))
    city = str(request.args.get('city'))
    summary = summarizePlace(n)
    wikiUrl = getUrl(n)
    imgUrl = getImgUrl(n, wikiUrl)
    data = None
    if os.path.getsize("data.json") > 0:
        with open("data.json", 'r') as f:
            # f.seek(0)
            # first_char = f.read(1)
            # if not first_char:
            #     f.write("[\n\n]")
            #     f.seek(0)
            # else:
            #     f.seek(0)
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
    os.remove("data.json")
    with open("data.json", "w") as f:
        json.dump(data, f, indent=2)
        
    return jsonify({"name": n, "description": summary, "wikiUrl": wikiUrl, "imageUrl": imgUrl})