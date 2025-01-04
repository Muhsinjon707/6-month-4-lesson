import React, { useState } from "react";
import styles from "./index.module.css";

function InputPrivateData() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("male");

  function handleSubmit(e) {
    e.preventDefault();
    let user = {
      firstname: firstname,
      lastname: lastname,
      gender: gender,
    };

    setFirstname("");
    setLastname("");
    setGender();

    console.log(user);
  }

  return (
    <div>
      <form className={styles.form}>
        <div className={styles.box}>
          <label htmlFor="firstName">First name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="lastName">Last name: </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="gender">Gender: </label>
          <div className={styles.boxRight}>
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="male"
              value={gender ? "male" : "female"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />

            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value={gender ? "female" : "male"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
          </div>
        </div>

        <button
          className={styles.btnSubmit}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputPrivateData;
