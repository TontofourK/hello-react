import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [password, setPassword] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed) str += "0123456789";
    if (symbolsAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbersAllowed, symbolsAllowed]);

  useEffect(() =>{
    generatePassword()
  }, [length, numbersAllowed, symbolsAllowed])

  const copyPasswordToClipboard = () =>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }
  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">password generator</h1>
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className="outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min="6"
              max="20"
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
              id=""
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              onChange={() => {
                setNumbersAllowed((prev) => !prev);
              }}
              name=""
              id=""
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              onChange={() => {
                setSymbolsAllowed((prev) => !prev);
              }}
              name=""
              id=""
            />
            <label htmlFor="symbols">Symbols</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
