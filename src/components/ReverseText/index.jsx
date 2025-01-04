import { useState } from "react";
import styles from "./index.module.css";

function ReverseText() {
  const [word, setWord] = useState("");

  function handleReverse(e) {
    e.preventDefault();

    let reverseWord = word.split("").reverse().join("");
    let newReverseWord = reverseWord[0].toUpperCase() + reverseWord.slice(1).toLowerCase();
    setWord(newReverseWord);
  }

  return (
    <div>
      <form className={styles.form}>
        <label htmlFor="word" className={styles.wordLabel}>
          Word:{" "}
        </label>
        <input
          type="text"
          className={styles.wordInput}
          name="word"
          id="word"
          placeholder="Enter any word..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />

        <button
          type="button"
          className={styles.reverseBtn}
          onClick={(e) => handleReverse(e)}
        >
          Reverse
        </button>
      </form>
      <div className={styles.wrapper}>
        {word && <div className={styles.output}>{word}</div>}
      </div>
    </div>
  );
}

export default ReverseText;
