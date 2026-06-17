const feedbackForm =
document.getElementById("feedbackForm");

if(feedbackForm){

feedbackForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You For Your Feedback ❤️");

});

}

function showPopup(message){

const popup =
document.getElementById("popup");

const popupMessage =
document.getElementById("popupMessage");

popupMessage.innerHTML = message;

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

},2000);

}
function showOrderSuccess(){

const popup =
document.getElementById("popup");

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

window.location.href =
"history.html";

},3000);

}