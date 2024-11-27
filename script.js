const errorMsg = document.getElementById('error-msg');
const submitBtn =document.getElementById('submit-btn');
const userEmail = document.getElementById('users-email');

console.log(userEmail.value)

submitBtn.addEventListener('click', function(event) {
     if (userEmail.value.type != 'email'){
          errorMsg.textContent = 'Please enter a valid email address'
     }

     else{
          errorMsg.textContent = ''
     }
     
})