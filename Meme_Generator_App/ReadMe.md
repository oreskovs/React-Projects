# Meme Generator 🎭

This project is a simple **React application** that allows generating memes.  
It uses the **Imgflip API** to fetch a collection of memes and lets users enter their own **top** and **bottom text** which is displayed on top of the image.

---

## 🚀 Features
- Displays a default meme with example text on initial load.
- Input fields to add **Top Text** and **Bottom Text**.
- A button **“Get a new meme image 🖼”** fetches a random meme image from the Imgflip API.
- User text is always displayed on the top and bottom of the meme.
- Meme-style font styling (white bold Impact with black outline).

---

## 🛠️ Technologies
- **React** (Vite or CRA setup)
- **JavaScript (ES6+)**
- **CSS (custom styling)**
- **Imgflip API** for memes

---

## 📂 Project Structure
```
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   └── Main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx (or index.jsx depending on setup)
└── package.json
```

---

## ▶️ Installation & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/oreskov.s/React-Projects.git
   cd React-Projects/Meme_Generator_App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   or for CRA:
   ```bash
   npm start
   ```

4. Open in your browser:
   ```
   http://localhost:5173/   (or http://localhost:3000/ for CRA)
   ```

---

## 🖼️ Overview
- The main functionality is in `Main.jsx`:
  - Loads memes using `useEffect` from the Imgflip API.
  - Allows user input for top and bottom text.
  - Randomly selects and displays meme images.
- `Header.jsx` is a simple header component with logo/title.
- Styling is defined in `index.css`.

---

## 📜 License
This project is free to use for learning and practice purposes.  
The Imgflip API is public and free for testing, but it is not officially intended for production use.

---
