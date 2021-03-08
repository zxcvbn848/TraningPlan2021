
import json
import urllib.request as req
url = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json"
with req.urlopen(url) as response:
    data = json.load(response)
scenicAreaList = data["result"]["results"]
with open("data.txt", "w", encoding="utf-8") as file:
    for sa in scenicAreaList:
        stitle = sa["stitle"]
        longitude = sa["longitude"]
        latitude = sa["latitude"]
        imgUrl = sa["file"].split("http://www.")[1]
        
        info = f'{stitle}, {longitude}, {latitude}, http://www.{imgUrl}'
        file.write(info + "\n")

