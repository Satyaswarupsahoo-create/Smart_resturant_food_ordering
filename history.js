const historyContainer =
document.getElementById("historyContainer");

const clearHistoryBtn =
document.getElementById("clearHistoryBtn");

let historyData =
JSON.parse(localStorage.getItem("history")) || [];

function displayHistory(){

historyContainer.innerHTML = "";

if(historyData.length === 0){

historyContainer.innerHTML = `
<h2 style="text-align:center;">
No Order History Found 📭
</h2>
`;

return;

}

historyData.forEach((order,index)=>{

let itemsHTML = "";

let total = 0;

order.items.forEach(item=>{

total += item.price;

itemsHTML += `
<li>
${item.name} - ₹${item.price}
</li>
`;

});

historyContainer.innerHTML += `

<div class="history-card">

<h3>
Order #${index+1}
</h3>

<p>
📅 ${order.date}
</p>

<ul>
${itemsHTML}
</ul>

<h4>
Total: ₹${total}
</h4>

</div>

`;

});

}

displayHistory();

/* CLEAR HISTORY */

clearHistoryBtn.addEventListener("click",()=>{

const confirmDelete =
confirm("Delete All Order History?");

if(confirmDelete){

localStorage.removeItem("history");

historyData = [];

displayHistory();

alert("History Cleared ✅");

}

});