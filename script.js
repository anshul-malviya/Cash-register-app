var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var btn = document.querySelector("#btn-check");
var input = billAmount.value;

btn.addEventListener("click", eventHandler);


function eventHandler() {
    cashGiven.innerText = "aaj";
}
