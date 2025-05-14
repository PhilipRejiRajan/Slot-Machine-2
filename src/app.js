import {
    spin,
    transpose,
    getWinnings
} from './gameLogic.js';

const SYMBOL_EMOJIS = {
    A: "💎",
    B: "🍒",
    C: "🍇",
    D: "🍋"
};

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

spinBtn.addEventListener("click", () => {
    const lines = parseInt(linesInput.value);
    const bet = parseFloat(betInput.value);
    const totalBet = bet * lines;

    if (isNaN(lines) || lines < 1 || lines > 3) {
        messageDisplay.innerText = "Please enter a valid number of lines(1-3).";
        return;
    }

    if (isNaN(bet) || bet <= 0) {
        messageDisplay.innerText = "Please enter a valid bet per line";
        return;
    }

    if(totalBet > balance){
        messageDisplay.innerText = `Not enough balance. You need $${totalBet.toFixed(2)}`;
        return;
    }

    const reels = spin();
    const rows = transpose(reels);

    displaySlotGrid(rows);

    const winnings = getWinnings(rows, bet, lines);
    balance -= totalBet;
    balance += winnings;

    balanceDisplay.innerText = balance.toFixed(2);
    winningsDisplay.innerText = winnings.toFixed(2);

    messageDisplay.innerText = winnings > 0
        ? `You won $${winnings.toFixed(2)}!`
        : "No win this time :(";

    betInput.value = "";
});

function displaySlotGrid(rows) {
    slotMachineDisplay.innerHTML = "";

    for (let row of rows) {
        for (let symbol of row) {
            const cell = document.createElement("div");
            cell.innerText = SYMBOL_EMOJIS[symbol];

            cell.classList.add("slot-cell", "spin-anim")
            slotMachineDisplay.appendChild(cell);
        }
    }
}