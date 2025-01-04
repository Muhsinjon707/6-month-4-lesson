import { useState } from "react";
import styles from "./index.module.css";

function AcceptTerms() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let errorText;
    if (!checked) {
        errorText = "Error. Input type checkbox should be checked";
    }

    let successText;
    if (checked) {
        successText = "Congrats";
    }

    if (!username) {
        errorText = "Invalid username!"
    }

    setErrorMsg(errorText);
    setSuccessMsg(successText);
  }

  function handleReset(e) {
    e.preventDefault();
    setUsername("");
    setEmail("");
    setChecked(false);
    setErrorMsg("");
    setSuccessMsg("");
  }

  return (
    <div>
      <form className={styles.form}>
        <div className={styles.mainActions}>
          <div className={styles.box}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username:"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.box}>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.box}>
            <label htmlFor="agree">Agreement: </label>
            <input
              type="checkbox"
              name="agree"
              id="agree"
              placeholder="Enter your agreement:"
              value={checked}
              onChange={(e) => setChecked(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.actionBtns}>
          <button
            type="button"
            className={styles.btnSubmit}
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
          <button
            type="reset"
            className={styles.btnReset}
            onClick={(e) => handleReset(e)}
          >
            Reset
          </button>
        </div>
      </form>

      <div className={styles.wrapper}>
        <div className={styles.errorStyle}>{errorMsg}</div>
        <div className={styles.successStyle}>{successMsg}</div>
      </div>
    </div>
  );
}

export default AcceptTerms;
