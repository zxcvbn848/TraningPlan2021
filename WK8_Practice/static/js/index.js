
/* const forms = document.querySelectorAll('form');

forms.forEach(form => {
   const nameInput = document.getElementsByName('input[name="name"]');
   const usernameInput = document.getElementsByName('input[name="username"]');
   const passwordInput = document.getElementsByName('input[name="[password]"]');

   function alertError(e) {
      e.preventDefault();
      let errorMessage = '請輸入';
      if (nameInput.value === "") errorMessage += '姓名';
      if (usernameInput.value === "") errorMessage += '帳號';
      if (passwordInput.value === "") errorMessage += '密碼';

      if (nameInput.value === "" || usernameInput.value === "" || passwordInput.value === "") alert(errorMessage);
      this.submit();
   }

   form.addEventListener('submit', alertError);
})

 */