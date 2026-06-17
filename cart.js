const cartContainer =
document.getElementById("cartContainer");

const totalPrice =
document.getElementById("totalPrice");

const placeOrderBtn =
document.getElementById("placeOrderBtn");

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

function displayCart(){

cartContainer.innerHTML = "";

let total = 0;

if(cart.length === 0){

cartContainer.innerHTML = `
<h2 style="text-align:center;">
Cart Is Empty 🛒
</h2>
`;

totalPrice.innerHTML =
"Total: ₹0";

return;

}

cart.forEach((item,index)=>{

total += item.price;

cartContainer.innerHTML += `

<div class="food-card">

<img src="${item.image}">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button
class="btn remove-btn"
data-index="${index}">
Remove
</button>

</div>

`;

});

totalPrice.innerHTML =
`Total: ₹${total}`;

}

displayCart();

/* REMOVE ITEM */

document.addEventListener("click",(e)=>{

if(e.target.classList.contains("remove-btn")){

const index =
e.target.dataset.index;

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

displayCart();

}

});

/* PLACE ORDER */

placeOrderBtn.addEventListener("click",()=>{

if(cart.length===0){

alert("Cart Is Empty");

return;

}

let history =
JSON.parse(
localStorage.getItem("history")
) || [];

history.push({

date:new Date().toLocaleString(),

items:cart

});

localStorage.setItem(
"history",
JSON.stringify(history)
);

localStorage.removeItem("cart");

showOrderSuccess();




});