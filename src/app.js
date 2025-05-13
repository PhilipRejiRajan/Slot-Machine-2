import {
    spin,
    transpose,
    getWinnings
} from './gameLogic.js';

const depositInput = document.getElementById("deposit");
const depositBtn = document.getElementById("deposit-btn");
const balanceDisplay = document.getElementById("balance");

const linesInput = document.getElementById("lines");
const betInput = document.getElementById("bet");
const spinBtn = document.getElementById("spin-btn");

const winningsDisplay = document.getElementById("winnings");
const messageDisplay = document.getElementById("message");
const slotMachineDisplay =document.getElementById("slot-machine");

let balance = 0;

depositBtn.addEventListener("click", () => {
    const amount = parseFloat(depositInput.value);

    if (isNaN(amount) || amount <= 0){
        messageDisplay.innerText = "Invalid deposit amount!";
        return;
    }

    balance += amount;
    balanceDisplay.innerText = balance.toFixed(2);
    messageDisplay.innerText = "Deposit successful!";
    depositInput.value = "";
});