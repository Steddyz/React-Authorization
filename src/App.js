import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SingIn";
import AuthDetails from "./components/auth/AuthDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AuthDetails" element={<AuthDetails />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <div className="App">
      <SignUp />
      <SignIn />
      <AuthDetails />
    </div> */
}
