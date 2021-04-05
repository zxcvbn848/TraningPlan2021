
let src = "http://127.0.0.1:3000/api/users?username=";

let text = document.querySelector('.text.username');

let displayData = "";

let newTextContent = document.createTextNode(displayData);
text.appendChild(newTextContent);

function searchData() {
   const usernameElement = document.getElementsByName('username');
   const username = usernameElement[0].value;
   let srcData = src + username;
   fetch(srcData)
      .then(function(response) {
         return response.json();
      })
      .then(function(result) {
         text.childNodes[0].nodeValue = "";

         let userData = result["data"];
         console.log(userData);
         console.log(typeof(userData));

         if (userData !== "null") {
            displayData = `${userData["name"]} (${userData["username"]})`;
         }
         else {
            displayData = '查詢不到資料';
         }

         text.childNodes[0].nodeValue = displayData;
      })
}

// ===================
// Another Failed Method:
         // let text = document.querySelector('.text.username');
         // let initialText = '';
         // let initialTextContent = document.createTextNode(initialText);
         // text.appendChild(initialTextContent);

         // let oldTextContent = text.childNodes[0];
         // let newTextContent = document.createTextNode(displayData);
         // text.appendChild(newTextContent);
         // text.replaceChild(newTextContent, oldTextContent);
         // text.replaceChild(newTextContent, initialTextContent);


