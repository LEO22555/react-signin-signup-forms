import ForgotPassword from "./components/ForgotPassword";
import SignIn from "./components/SignIn";
import {useState} from "react";
import SignUp from "./components/SignUp";

function App() {
  const[step, setSep] = useState("signup");
  return (
    <div className="container">
      {step === "signin"&& <SignIn/>}
      {step === "signup"&& <SignUp/>}
      {step === "forgot"&& <ForgotPassword/>}
    </div>
  );
}

export default App;
