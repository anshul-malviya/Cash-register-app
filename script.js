const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given");
const hidden = document.querySelector(".hidden");
const btn = document.querySelector("#btn-check");
const btnNext = document.querySelector("#btn-next");
const message = document.querySelector("#message");
const note = document.querySelectorAll(".note");

const availableNotes = [2000, 500, 100,50, 20, 10, 5, 1];

hidden.style.display = "none";
btnNext.addEventListener("click",function(){
    hidden.style.display = "block";
})

btn.addEventListener("click", function validateBillAmountCashAmount() {
    message.style.display = "none";

    if (billAmount.value > 0) {
        if(cashGiven.value > billAmount.value) {
            const amountReturn = cashGiven.value - billAmount.value;
            calculateChange(amountReturn);
        }
         else {
            showMessage("The case provided should be equal to bill amount")
        }
    } 
    else {
        showMessage("Invalid Bill Amount");
    }
})

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function calculateChange(amountReturn) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountReturn / availableNotes[i]);
        amountReturn = amountReturn % availableNotes[i];
        note[i].innerText = numberOfNotes;
    }

}
