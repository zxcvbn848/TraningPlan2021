# https://data.taipei/api/v1/dataset/36847f3f-deff-4183-a5bb-800737591de5?scope=resourceAquire
# https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json

import json
import urllib.request as req
url = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json"
with req.urlopen(url) as response:
    data = json.load(response)
scenicAreaList = data["result"]["results"]
# title = "景點名稱, 經度, 緯度, 第一張圖檔網址"
with open("data.txt", "w", encoding="utf-8") as file:
    # file.write(title + "\n")
    for sa in scenicAreaList:
        stitle = sa["stitle"]
        longitude = sa["longitude"]
        latitude = sa["latitude"]
        imgUrl = sa["file"].split(".jpg", 1)[0]
        
        info = f'{stitle}, {longitude}, {latitude}, {imgUrl}.jpg+'
        print(info)
        file.write(info + "\n")

