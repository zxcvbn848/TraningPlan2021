
let src = 'https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json';

fetch(src)
    .then(function(response) {
        return response.json(); 
    })
    .then(function(result) {       
        let scenicArea = result.result.results;

        let title;
        let titleArray = [];
        for (let i = 0; i < scenicArea.length; i++) {
            title = scenicArea[i].stitle;
            titleArray.push(title);
        }

        let imageUrl;
        let imageUrlArray = [];
        for (let i = 0; i < scenicArea.length; i++) {
            imageUrl = 'http://' + scenicArea[i].file.split('http://')[1];
            imageUrlArray.push(imageUrl);
        }

        let boxes = document.getElementsByClassName('box');
        for (i = 0; i < scenicArea.length; i++) {
            let box = boxes[i];

            let boxImage = document.createElement('div');
            boxImage.className = 'box-image';
            let imgTag = document.createElement('img');
            imgTag.src = imageUrlArray[i];
            
            boxImage.appendChild(imgTag);
            box.appendChild(boxImage);
    
            let boxText = document.createElement('div');
            boxText.className = 'box-text';
            let textContent = document.createTextNode(titleArray[i]);
            
            boxText.appendChild(textContent);
            box.appendChild(boxText);                
        }
        let content = document.getElementsByClassName('content')[0];
        content.appendChild(boxes);
    });

function loadMore() {
    let content = document.getElementsByClassName('content')[0];
    
    for (let j = 0; j < 8; j++) {
        let box = document.createElement('div');
        box.className = 'box';
        content.appendChild(box);
    }

let src = 'https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json';

fetch(src)
    .then(function(response) {
        return response.json(); 
    })
    .then(function(result) {       
        let scenicArea = result.result.results;
        var scenicNumber = 8;

        let title;
        let titleArray = [];
        for (let i = scenicNumber; i < scenicArea.length; i++) {
            title = scenicArea[i].stitle;
            titleArray.push(title);
        }

        let imageUrl;
        let imageUrlArray = [];
        for (let i = scenicNumber; i < scenicArea.length; i++) {
            imageUrl = 'http://' + scenicArea[i].file.split('http://')[1];
            imageUrlArray.push(imageUrl);
        }

        let boxes = document.getElementsByClassName('box');
        for (let i = scenicNumber; i < scenicArea.length; i++) {
            let box = boxes[i];

            let boxImage = document.createElement('div');
            boxImage.className = 'box-image';
            let imgTag = document.createElement('img');
            imgTag.src = imageUrlArray[i];
            
            boxImage.appendChild(imgTag);
            box.appendChild(boxImage);
    
            let boxText = document.createElement('div');
            boxText.className = 'box-text';
            let textContent = document.createTextNode(titleArray[i]);
            
            boxText.appendChild(textContent);
            box.appendChild(boxText);                
        }

        let content = document.getElementsByClassName('content')[0];
        content.appendChild(boxes);
    });
}