const menuContainer =
document.getElementById("menuContainer");

const searchInput =
document.getElementById("searchInput");

const filterButtons =
document.querySelectorAll(".filter-btn");

function displayMenu(items){

menuContainer.innerHTML="";

items.forEach(item=>{

menuContainer.innerHTML += `

<div class="food-card">

<img src="${item.image}">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button class="btn add-cart"
data-id="${item.id}">
Add To Cart
</button>

</div>

`;

});

}

displayMenu(menuItems);

/* SEARCH */

searchInput.addEventListener("keyup",()=>{

const value =
searchInput.value.toLowerCase();

const filtered =
menuItems.filter(item=>

item.name.toLowerCase().includes(value)

);

displayMenu(filtered);

});

/* FILTER */

filterButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

document
.querySelector(".active")
.classList.remove("active");

btn.classList.add("active");

const category =
btn.dataset.category;

if(category==="all"){

displayMenu(menuItems);

}else{

const filtered =
menuItems.filter(item=>

item.category===category

);

displayMenu(filtered);

}

});

});

/* ADD TO CART */

document.addEventListener("click",(e)=>{

if(e.target.classList.contains("add-cart")){

const id =
Number(e.target.dataset.id);

const item =
menuItems.find(food=>food.id===id);

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

cart.push(item);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

showPopup(item.name + " Added To Cart ✅");

}

});