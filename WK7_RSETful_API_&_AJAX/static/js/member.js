
let textUsername = document.querySelector('.text.username');
let displayData = "";
let textContent = document.createTextNode(displayData);
textUsername.appendChild(textContent);

function searchData() {
   let username = document.getElementsByName('username')[0].value;
   let srcGET = `http://127.0.0.1:3000/api/user?username=${username}`;
   fetch(srcGET)
      .then((response) => {
         return response.json();
      })
      .then((result) => {
         // textUsername.childNodes[0].nodeValue = "";

         let userData = result["data"];
         // console.log(userData);

         if (userData !== "null") {
            displayData = `${userData["name"]} (${userData["username"]})`;
         }
         else {
            displayData = '查詢不到資料';
         }

         textUsername.childNodes[0].nodeValue = displayData;
      })
}

let textName = document.querySelector('.text.name');
let textWelcome = document.querySelector('.text.welcome');

let successOrNot = "";

let textSuccess = document.createTextNode(successOrNot);
textName.appendChild(textSuccess);

function updateData() {
   let name = document.getElementsByName('name')[0].value;
   let srcPOST = `http://127.0.0.1:3000/api/user`;
   fetch(srcPOST, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         "name": `${name}`
      })
   })
      .then((response) => {
         return response.json();
      })
      .then((result) => {
         console.log(result);

         // textName.childNodes[0].nodeValue = "";

         let updateSuccess = result["ok"];
         let updateFailed = result["error"];
         // console.log(updateSuccess);
         // console.log(updateFailed);

         if (updateSuccess === "true") {
            successOrNot = '更新成功';
            textWelcome.childNodes[0].nodeValue = `${name}，歡迎登入系統`;
         }
         if (updateFailed === "true") {
            successOrNot = '更新失敗';
         }

         textName.childNodes[0].nodeValue = successOrNot;
      }).catch((err) => {
         console.log('錯誤', err);
      })
}
