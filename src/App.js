import React, { useState } from "react";
import IntlTelInput from "./components/TelInput";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isValid, setValid] = useState("");
  const onChange = isValid => {
    setValid(isValid);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <IntlTelInput onPhoneNumberChange={onChange} />
        {isValid ? "Valid Phone Number" : "Not Valid Phone Number"}
      </header>
    </div>
  );
}

export default App;
