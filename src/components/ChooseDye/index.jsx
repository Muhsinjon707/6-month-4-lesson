import { useState } from "react";
import styles from "./index.module.css"

function ChooseDye() {
  const [color, setColor] = useState("");

  function handleBgColor(e) {
    e.preventDefault();
    const newColor = color;
    setColor(newColor);
    document.body.style.backgroundColor = newColor;
  }

  return (
    <>
      <form className={styles.form}>
        <label htmlFor="chooseColor" className={styles.colorLabel}>Choose Color: </label>
        <input
          type="color"
          name="chooseColor"
          id="chooseColor"
          value={color}
          onChange={(e) => {setColor(e.target.value)}}
        />

        <button className={styles.colorBtn} onClick={(e) => {handleBgColor(e)}}>Choose</button>
      </form>
    </>
  );
}

export default ChooseDye;
