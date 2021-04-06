
let srcGET = "http://127.0.0.1:3000/api/users?username=";

let textUsername = document.querySelector('.text.username');

let displayData = "";

let textContent = document.createTextNode(displayData);
textUsername.appendChild(textContent);

function searchData() {
   const usernameElement = document.getElementsByName('username');
   const username = usernameElement[0].value;
   let srcData = srcGET + username;
   fetch(srcData)
      .then(function(response) {
         return response.json();
      })
      .then(function(result) {
         textUsername.childNodes[0].nodeValue = "";

         let userData = result["data"];
         // console.log(userData);
         // console.log(typeof(userData));

         if (userData !== "null") {
            displayData = `${userData["name"]} (${userData["username"]})`;
         }
         else {
            displayData = '查詢不到資料';
         }

         textUsername.childNodes[0].nodeValue = displayData;
      })
}

// let textName = document.querySelector('.text.name');

// let successOrNot = "";

// let textSuccess = document.createTextNode(successOrNot);
// textUsername.appendChild(textSuccess);

// let srcPOST = "http://127.0.0.1:3000/api/user";

// function updateData() {
//    const nameElement = document.getElementsByName('name');
//    const name = nameElement[0].value;
//    let srcData = srcPOST + name;
//    fetch(srcData)
//       .then(function(response) {
//          return response.json();
//       })
//       .then(function(result) {
//          text.childNodes[0].nodeValue = "";

//          let userData = result["data"];

//          if (userData !== "null") {
//             successOrNot = '更新成功';
//          }
//          else {
//             successOrNot = '更新失敗';
//          }

//          text.childNodes[0].nodeValue = successOrNot;
//       })
// }

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


