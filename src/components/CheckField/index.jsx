import React, { useState } from "react";
import styles from "./index.module.css";

function CheckField() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function validate(firstName, lastName, email) {
    if (firstName.length < 3) {
      return false;
    }

    if (lastName.length < 3) {
      return false;
    }

    if (email.length < 3 && !email.includes("@")) {
      return false;
    }

    if (!firstName) {
      return false;
    }

    if (!lastName) {
      return false;
    }

    if (!email) {
      return false;
    }

    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validate(firstName, lastName, email);

    if (!isValid) {
      setErrorMessage("Your form field is not valid!");
    }

    if (isValid) {
      setSuccessMessage("Congrats!");
    }
  }

  function handleReset(e) {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setEmail("");
    setErrorMessage("");
    setSuccessMessage("");
  }

  return (
    <div className={styles.validation}>
      <form className={styles.form}>
        <div className={styles.mainActions}>
          <div className={styles.box}>
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name:"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.box}>
            <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name:"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.box}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter your email:"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.actionBtns}>
          <button type="button" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
          <button type="reset" onClick={(e) => handleReset(e)}>
            Reset
          </button>
        </div>
      </form>

      {successMessage && (
        <div className={styles.wrapper}>
          <div className={styles.successfulOutput}>{successMessage}</div>
        </div>
      )}

      {errorMessage && (
        <div className={styles.wrapper}>
          <div className={styles.errorOutput}>{errorMessage}</div>
        </div>
      )}
    </div>
  );
}

export default CheckField;
