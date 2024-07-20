import { useState } from "react";
import "./App.css";
import { LC, NC, SC, UC } from "./Data/PassChar";

function App() {
  let [upperCase, setUpperCase] = useState(false);
  let [lowerCase, setLowerCase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordLen, setPasswordLen] = useState(10);
  let [fPass, setFPass] = useState('');


  let createPassword = () => {
    let finalPass = "";
    let charSet = "";
    if (upperCase || lowerCase || number || symbols) {
      if (upperCase) charSet += UC;
      if (lowerCase) charSet += LC;
      if (number) charSet += NC;
      if (symbols) charSet += SC;

      for(let i = 0; i < passwordLen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setFPass(finalPass);
    } else {
      alert("Please select at least one option");
    }
  };
  
  let copyPass = () => { 
    navigator.clipboard.writeText(fPass);
    alert("Password copied to clipboard");
  }
  return (
    <>
      <div className="passwordBox">
        <h2>-Password Generator-</h2>

        <div className="passwordBoxin ">
          <input type="text" readOnly value={fPass}/>
          <button onClick={copyPass}>Copy</button>
        </div>

        <div className="passLength">
          <label>Password Length:</label>
          <input
            type="number"
            min={8}
            max={20}
            value={passwordLen}
            onChange={(event) => {
              setPasswordLen(event.target.value);
            }}
          />
        </div>

        <div className="passLength">
          <label>Include Uppercase Letters:</label>
          <input
            type="checkbox"
            checked={upperCase}
            onChange={() => {
              setUpperCase(!upperCase);
            }}
          />
        </div>

        <div className="passLength">
          <label>Include Lowercase Letters:</label>
          <input
            type="checkbox"
            checked={lowerCase}
            onChange={() => {
              setLowerCase(!lowerCase);
            }}
          />
        </div>

        <div className="passLength">
          <label>Include Number:</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => {
              setNumber(!number);
            }}
          />
        </div>

        <div className="passLength">
          <label>Include Special Characters:</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => {
              setSymbols(!symbols);
            }}
          />
        </div>

        <button className="btn" onClick={createPassword}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
