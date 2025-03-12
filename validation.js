const form = document.getElementById("RegisterForm")
const Email = document.getElementById("Email")
const Username = document.getElementById("Username")
const Password = document.getElementById("Password")

form.addEventListener('submit', (e) => {
   // e.preventDefault();

   let errors = []

   if (Email){
        errors = getSignupFormErrors(Email.value, Username.value, Password.value);
   }
   else {
        errors = getLoginFormErrors(Username.value, Password.value);
   }
})

function getSignupFormErrors(email, username, password){
    let erros = []

    if(email === '' || email === null){
        error.push('email is required');
    } 
}