import styles from "./index.module.css";
import React, { useState } from "react";

function UserCreation() {
  const [users, setUsers] = useState([]);
  const [username, setUserName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let user = {
      id: Date.now(),
      name: username,
    };

    let newArray = [...users];
    newArray.push(user);

    setUsers(newArray);

    setUserName("");
  }

  function handleDelete(id) {
    let conf = confirm("Are you sure?");

    if (!conf) {
      return;
    }
    let newArray = [...users];
    newArray = newArray.filter((user) => {
      user.id != id;
    });
    setUsers(newArray);
  }

  function handleEdit(user) {
    const data = prompt("Enter new username: ", user.name);

    if (data) {
      let newArray = [...users];
      newArray = newArray.map((item) => {
        if (user.id == item.id) {
          item.name = data;
        }

        return item;
      });
      console.log(48, newArray);

      setUsers(newArray);
    }
  }

  function handleClear() {
    setUsers([]);
  }

  return (
    <>
      <form className={styles.form}>
        <label htmlFor="username" className={styles.userLabel}>
          Username:{" "}
        </label>
        <input
          className={styles.userInput}
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username..."
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />

        <button className={styles.button} onClick={handleSubmit}>
          SAVE
        </button>

        <button className={styles.clearBtn} onClick={handleClear}>
          Clear
        </button>
      </form>

      <div className={styles.wrapper}>
        <ul className={styles.userName}>
          {users.length > 0 &&
            users.map((item) => {
              return (
                <li className={styles.listItem} key={item.id}>
                  {item.name}
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      handleEdit(item);
                    }}
                  >
                    Edit
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default UserCreation;
