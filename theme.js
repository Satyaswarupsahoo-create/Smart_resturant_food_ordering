const themeBtn =
document.getElementById("themeToggle");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeBtn.innerHTML="☀️";

}else{

localStorage.setItem("theme","light");

themeBtn.innerHTML="🌙";

}

});

}

const savedTheme =
localStorage.getItem("theme");

if(savedTheme==="dark"){

document.body.classList.add("dark");

if(themeBtn){

themeBtn.innerHTML="☀️";

}

}