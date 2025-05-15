# 🎰 Slot Machine

This is a simple web-based Slot Machine game. Originally developed as a CLI-based Node.js [project](https://github.com/PhilipRejiRajan/Slot-Machine), it has been fully transformed into a web app with a clean UI and animated slot reels.

## 🚀 Features

- Deposit a virtual balance.
- Choose how many lines to bet on (1–3).
- Set bet amount per line.
- Spin slot machine to win virtual coins.
- Animated symbol reveal.
- Easy-to-use interface.

## 👀 Preview

Try the game live [here](https://philiprejirajan.github.io/Slot-Machine-2/).

## 🗂️ Project Structure

```
slot-machine/
├── docs/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   ├── gameLogic.js
│
└── README.md
```

## 🧠 Game Logic

The game works like a 3x3 slot machine. Symbols (`A`, `B`, `C`, `D`) have different frequencies and payout values:

- **Symbol Frequencies**:
  - A: 2
  - B: 4
  - C: 6
  - D: 8
- **Payout Multipliers**:
  - A: 5×
  - B: 4×
  - C: 3×
  - D: 2×
- **Symbol Emojis**:
  - A: 💎
  - B: 🍒
  - C: 🍇
  - D: 🍋

Winnings are calculated if all symbols in a line are the same.

## 📦 Setting up Locally

```
git clone https://github.com/PhilipRejiRajan/Slot-Machine-2.git     # clone the repo
cd Slot-Machine-2                                                   # navigate to the repo
npx serve                                                           # run game on local machine
```

## ✨Misc

Created with ❤️ using vanilla HTML/CSS/JS as a learning project.
