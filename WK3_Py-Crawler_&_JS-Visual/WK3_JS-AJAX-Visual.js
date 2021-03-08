
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
            imageUrl = scenicArea[i].file.split('.jpg', 2)[0] + '.jpg';
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
        document.body.appendChild(boxes);
    });