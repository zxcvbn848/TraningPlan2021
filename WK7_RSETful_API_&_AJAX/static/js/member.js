
const searchInput = document.getElementById('searchInput');
const updateInput = document.getElementById('updateInput');

searchInput.addEventListener('keyup', event => {
   if (event.code === 'Enter') {
      event.preventDefault();
      document.getElementById('searchButton').click();
   }
})

updateInput.addEventListener('keyup', event => {
   if (event.code === 'Enter') {
      event.preventDefault();
      document.getElementById('updateButton').click();
   }
})

const textUsername = document.querySelector('.text.username');
let displayData = "";
const textContent = document.createTextNode(displayData);
textUsername.appendChild(textContent);

function searchData() {
   let username = document.getElementsByName('username')[0].value;
   const srcGET = `http://127.0.0.1:3000/api/users?username=${username}`;
   fetch(srcGET)
      .then((response) => {
         return response.json();
      })
      .then((result) => {
         let userData = result["data"];
         console.log(typeof(userData));

         if (userData !== null) {
            displayData = `${userData["name"]} (${userData["username"]})`;
         }
         else {
            displayData = '查詢不到資料';
         }

         textUsername.childNodes[0].nodeValue = displayData;
      })
}

const textName = document.querySelector('.text.name');
const textWelcome = document.querySelector('.text.welcome');

let successOrNot = "";

const textSuccess = document.createTextNode(successOrNot);
textName.appendChild(textSuccess);

function updateData() {
   let name = document.getElementsByName('name')[0].value;
   const srcPOST = `http://127.0.0.1:3000/api/user`;
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
         const updateSuccess = result["ok"];
         const updateFailed = result["error"];
         // console.log(typeof(updateSuccess));
         // console.log(updateFailed);

         if (updateSuccess === true) {
            successOrNot = '更新成功';
            textWelcome.childNodes[0].nodeValue = `${name}，歡迎登入系統`;
         }
         if (updateFailed === true) {
            successOrNot = '更新失敗';
         }

         textName.childNodes[0].nodeValue = successOrNot;
      }).catch((err) => {
         console.log('錯誤', err);
      })
}
