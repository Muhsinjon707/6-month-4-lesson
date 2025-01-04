import { useState } from "react";
import styles from "./index.module.css";

function CalculateNumbers() {
  const [firstNumber, setFirstNumber] = useState(1);
  const [secondNumber, setSecondNumber] = useState(1);
  const [sign, setDefaultSign] = useState();
  const [result, setResult] = useState(1);

  function handleCalculate(e) {
    e.preventDefault();

    let calcResult;
    if (sign === "+") {
      calcResult = Number(firstNumber) + Number(secondNumber);
    }

    if (sign === "*") {
      calcResult = Number(firstNumber) * Number(secondNumber);
    }

    if (sign === "-") {
      calcResult = Number(firstNumber) - Number(secondNumber);
    }

    if (sign === "/") {
      calcResult = Number(firstNumber) / Number(secondNumber);

      if (Number(secondNumber) === 0) {
        calcResult = "Error";
      }
    }

    if (!sign) {
      calcResult = ("You have to include any sign");
    }

    if (!["+", "-", "*", "/"].includes(sign)) {
      calcResult = ("Invalid operator. Please use +, -, *, or /.");
      return;
    }

    setResult(calcResult);
    setFirstNumber(1);
    setSecondNumber(1);
    setDefaultSign("");
  }

  return (
    <div className={styles.oneApp}>
      <h3 className={styles.myCalc}>Calculator</h3>
      <form className={styles.form}>
        <div className={styles.calculation}>
          <input
            className={styles.input1}
            type="number"
            value={firstNumber}
            onChange={(e) => {
              setFirstNumber(e.target.value);
            }}
          />
          <input
            className={styles.input2}
            type="text"
            value={sign}
            onChange={(e) => {
              setDefaultSign(e.target.value);
            }}
          />
          <input
            className={styles.input3}
            type="number"
            value={secondNumber}
            onChange={(e) => {
              setSecondNumber(e.target.value);
            }}
          />
        </div>
        <span className={styles.equalSign}>||</span>
      </form>

      <div className={styles.wrapper}>
        <div className={styles.output}>{result}</div>
      </div>

      <button
        className={styles.btnCalculate}
        onClick={(e) => handleCalculate(e)}
      >
        Calculate
      </button>
    </div>
  );
}

export default CalculateNumbers;
