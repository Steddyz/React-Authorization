import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");

  function register(e) {
    e.preventDefault();
    if (copyPassword !== password) {
      setError("Password didn't match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setEmail("");
        setPassword("");
        setCopyPassword("");
        setError("");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <form onSubmit={register}>
        <h2>Create an account</h2>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Enter your Email"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Enter your Passwors"
        />
        <input
          value={copyPassword}
          onChange={(e) => {
            setCopyPassword(e.target.value);
          }}
          type="password"
          placeholder="Repeat your Passwors"
        />
        <button>Create</button>
        {error ? <p style={{ color: "red" }}>{error}</p> : ""}
      </form>
    </div>
  );
}
