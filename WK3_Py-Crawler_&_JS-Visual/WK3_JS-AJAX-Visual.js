// https://data.taipei/api/v1/dataset/36847f3f-deff-4183-a5bb-800737591de5?scope=resourceAquire
// https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json

let src = 'https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json';

fetch(src)
    .then(function(response) {
        return response.json(); // 將資料用 JSON 的格式詮釋成：物件和陣列的組合
    })
    .then(function(result) {
        let scenicArea = result.result.results;

        let title;
        let titleArray = [];
        for (let i = 0; i < scenicArea.length; i++) {
            title = scenicArea[i].stitle;
            // console.log(title);
            titleArray.push(title);
        }
        // console.log(titleArray);

        let imageUrl;
        let imageUrlArray = [];
        for (let i = 0; i < scenicArea.length; i++) {
            imageUrl = scenicArea[i].file.split('.jpg', 2)[0] + '.jpg';
            // console.log(title);
            imageUrlArray.push(imageUrl);
        }
        // console.log(imageUrlArray);

        let boxes = document.getElementsByClassName('box');
        for (i = 0; i < scenicArea.length; i++) {
            // createElement('div', 'box-image', boxImage, box);
            // createElement('div', 'box-text', boxText, box);
            let box = boxes[i];

            let boxImage = document.createElement('div');
            boxImage.className = 'box-image';
            imgTag = document.createElement('img');
            imgTag.src = imageUrlArray[i];
            boxImage.appendChild(imgTag);
            box.appendChild(boxImage);
    
            let boxText = document.createElement('div');
            boxText.className = 'box-text';
            textContent = document.createTextNode(titleArray[i]);
            boxText.appendChild(textContent);
            box.appendChild(boxText);
    
            
            // createText('div', 'box-text', titleArray[0], textContent, boxText);    
            // createImg('img', 'https://zxcvbn848.github.io/Picture/1.jpg?raw=true', img, boxImage);
    
        }
        document.body.appendChild(boxes);
    });


// function createElement(tag, className, childTag, parentTag) {
//     let childTag = document.createElement(tag);
//     childTag.className = className;
//     parentTag.appendChild(childTag);
// }

// function createImg(tag, src, imgTag, ChildTag) {
//     imgTag = document.createElement(tag);

//     imgTag.src = src;
//     ChildTag.appendChild(imgTag);
//     parentTag.appendChild(childTag);
// }

// function createText(tag, className, text, childTag, parentTag) {
//     textNode = document.createTextNode(text);
//     childTag.appendChild(textNode);
//     parentTag.appendChild(childTag);
// }
