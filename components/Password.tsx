import styles from "../styles/password.module.css";
import { useDispatch } from "react-redux";
import { removePasswordPanel, revealDashboard } from "./reducers/actions";
import { useState, useRef } from "react";

function Password() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState(0);
  const [passwordError, setPasswordError] = useState(false);

  const inputRef: any = useRef()

  function handleInput(e: any) {
    e.preventDefault();
    setPassword(parseInt(e.target.value));
  }

  function combineReducers() {
    if (password !== 1234) {
      alert("Wrong Password!");
      setPasswordError(true);
      inputRef.current.value = null
    } else {
      dispatch(removePasswordPanel(password));
      dispatch(revealDashboard());
    }
  }

  return (
    <div className={styles.password}>
      <h1>Hello! Enter Your Password: </h1>
      <input type="password" placeholder="Password" onChange={handleInput} ref = {inputRef}/>
      <button onClick={combineReducers}>Submit</button>
      {passwordError && <p>Incorrect Password!</p>}
    </div>
  );
}

export default Password;
