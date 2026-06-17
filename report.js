const reportForm =
document.getElementById("reportForm");

reportForm.addEventListener("submit",(e)=>{

e.preventDefault();

const reportData = {

name:
document.getElementById("customerName").value,

problem:
document.getElementById("problemType").value,

description:
document.getElementById("problemDescription").value,

date:
new Date().toLocaleString()

};

let reports =
JSON.parse(
localStorage.getItem("reports")
) || [];

reports.push(reportData);

localStorage.setItem(
"reports",
JSON.stringify(reports)
);

/* SHOW POPUP */

const popup =
document.getElementById("popup");

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

},2500);

reportForm.reset();

});