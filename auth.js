const signupForm =
document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",function(e){

e.preventDefault();

const user = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
password: document.getElementById("password").value
};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert("Account Created Successfully");

window.location.href = "login.html";

});

}


const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

const user =
JSON.parse(localStorage.getItem("user"));

if(
user &&
user.email === email &&
user.password === password
){

alert("Login Successful");

window.location.href = "index.html";

}else{

alert("Invalid Email Or Password");

}

});

}