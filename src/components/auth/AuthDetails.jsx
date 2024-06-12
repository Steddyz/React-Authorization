import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";

export default function AuthDetails() {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  function userSignOut() {
    signOut(auth)
      .then(() => console.log("success"))
      .catch((er) => console.log(er));
  }

  return (
    <div>
      {authUser ? (
        <div>
          {`Signed in as ${authUser.email}`}
          <button onClick={userSignOut}>Sing Out</button>
        </div>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
}
