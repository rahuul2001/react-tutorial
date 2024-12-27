import { useState, useCallback, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);

  // password
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charsAllowed) {
      str += "!@#$%^&*()+-";
    }

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    } 

    setPassword(pass)

    console.log("Password is: ", password)
  }, [length, numberAllowed, charsAllowed]);



  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charsAllowed])



  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-sm rounded-lg px-4 py-3 my-8 g-gray-800 text-orange-800">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />

          <button className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>

          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={50}
                value={length}
                className="cursor-pointer"
                name=""
                id=""
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="length">Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                name=""
                id=""
              />
              <label htmlFor="number">Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charsAllowed}
                onChange={() => setCharsAllowed((prev) => !prev)}
                name=""
                id=""
              />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
