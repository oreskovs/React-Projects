import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import Die from "./components/Die";
import Confetti from "react-confetti";

export default function App() {
  const [diceNums, setDiceNums] = useState(() => generateAllNewDice());
  const buttonRef = useRef(null);

  const gameWon =
    diceNums.every((die) => die.isHeld) &&
    diceNums.every((die) => die.value === diceNums[0].value);

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  const dices = diceNums.map((die) => (
    <Die
      id={die.id}
      hold={hold}
      isHeld={die.isHeld}
      key={die.id}
      value={die.value}
    />
  ));

  function hold(id) {
    setDiceNums((oldDice) => {
      return oldDice.map((dice) => {
        return dice.id === id
          ? {
              ...dice,
              isHeld: !dice.isHeld,
            }
          : dice;
      });
    });
  }

  function setDice() {
    setDiceNums((prevDice) =>
      prevDice.map((dice) => {
        return dice.isHeld
          ? dice
          : {
              ...dice,
              value: Math.ceil(Math.random() * 6),
            };
      })
    );
  }

  function startNewGame() {
    setDiceNums(generateAllNewDice());
  }

  return (
    <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
      <div className="dice-container">{dices}</div>
      <button
        ref={buttonRef}
        onClick={gameWon ? startNewGame : setDice}
        className="roll-dice-btn"
      >
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
