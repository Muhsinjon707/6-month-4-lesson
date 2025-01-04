import { useState } from 'react'

import styles from "./index.module.css"

function DisplayPassword() {
    const [show, setType] = useState(false);
  return (
    <>
      <form className={styles.form}>
        <label htmlFor="password" className={styles.passwordLabel}>Password:</label>
        <input type={show ? "text" : "password"} name="password" id="password" className={styles.passwordInput} />

        <button type="button" className={styles.button} onClick={() => {setType(!show)}}>{show ? "password" : "text"}</button>
      </form>
    </>
  );
}

export default DisplayPassword