import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import Button from "../UI/Button/Button";
import "../../App.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function logIn(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setEmail("");
        setPassword("");
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError("Sorry we couldnt't find your account");
      });
  }

  return (
    <div>
      <form className="formm">
        <h2>Log in</h2>
        <input
          className="myInput"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Enter your Email"
        />
        <input
          className="myInput"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Enter your Passwors"
        />
        <Button onClick={logIn}>Login</Button>
        {error ? <p style={{ color: "red" }}>{error}</p> : ""}
      </form>
    </div>
  );
}
