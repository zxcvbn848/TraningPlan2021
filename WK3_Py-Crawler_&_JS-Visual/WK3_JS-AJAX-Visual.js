
let src = 'https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json';

let titleArray = [];
let imageUrlArray = [];
let count = 0;

load();

function load() {
    fetch(src)
        .then(function(response) {
            return response.json(); 
        })
        .then(function(result) {

            let content = document.getElementsByClassName('content')[0];
            
            let scenicArea = result.result.results;            
            
            for (let j = count; j < count + 8; j++) {
                let box = document.createElement('div');
                box.className = 'box';
                content.appendChild(box);

                let title = scenicArea[j].stitle;
                titleArray.push(title);

                let imageUrl = 'http://' + scenicArea[j].file.split('http://')[1];
                imageUrlArray.push(imageUrl);
    
                let boxImage = document.createElement('div');
                boxImage.className = 'box-image';
                let imgTag = document.createElement('img');
                imgTag.src = imageUrlArray[j];
                
                boxImage.appendChild(imgTag);
                box.appendChild(boxImage);
        
                let boxText = document.createElement('div');
                boxText.className = 'box-text';
                let textContent = document.createTextNode(titleArray[j]);
                
                boxText.appendChild(textContent);
                box.appendChild(boxText);
            }
            count += 8;

            let boxes = document.getElementsByClassName('box');
            content.appendChild(boxes);
        });
    }