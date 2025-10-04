# 🎲 Tenzies Game  

A fun and interactive dice game built with **React**, where the goal is to roll until all dice show the same number. You can hold dice between rolls to keep their value.

---

## 🧩 Project Info  

- **Project name:** `tenzies_game`  
- **Repository:** [React-Projects](https://github.com/oreskov.s/React-Projects)  
- **Author:** [oreskov.s](https://github.com/oreskov.s)  
- **Framework:** React.js  
- **Language:** JavaScript (ES6)  
- **Styling:** CSS  

---

## 🎮 How to Play  

1. Click **"Roll"** to roll all 10 dice.  
2. Click on individual dice to **hold** them (turns green).  
3. Keep rolling until all dice show the **same number**.  
4. When you win, confetti appears 🎉 and you can start a **new game**.  

---

## 🧠 Features  

- 🎲 Random dice generation  
- 🟩 Ability to hold/unhold dice  
- 🏆 Win detection (all dice held + same value)  
- 🎉 Confetti animation on win  
- ♻️ Option to start a new game  
- ⌨️ Auto-focus on “New Game” button after winning  

---

## 🧱 Folder Structure  

```
tenzies_game/
│
├── src/
│   ├── components/
│   │   └── Die.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── README.md
└── ...
```

---

## ⚙️ Installation & Setup  

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/oreskov.s/React-Projects.git

# Navigate to the project folder
cd React-Projects/tenzies_game

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open **http://localhost:5173/** (or the port shown in your terminal) in your browser.

---

## 🧩 Built With  

- [React](https://react.dev/) – UI library  
- [nanoid](https://github.com/ai/nanoid) – Unique ID generator  
- [react-confetti](https://www.npmjs.com/package/react-confetti) – Fun confetti animation  

---

## 🚀 Future Improvements  

- Add a **roll counter**  
- Track **best time / number of rolls**  
- Add **dark mode**  
- Add **sound effects**

---

### 👨‍💻 Created by [oreskov.s](https://github.com/oreskov.s)
