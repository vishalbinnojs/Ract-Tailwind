import { useState, useEffect, useRef } from "react";
import Button from "./assets/components/Button";

import "./App.css";

function App() {
  const [progress, setProgress] = useState(8);
  console.log(progress);

  const maxLength= 100;
  const [password,setPassword] = useState('')
  console.log(password);

  const passwordRef = useRef(null);
  const [includeNumbers,setIncludeNumbers] = useState(false)
  const [includeSymbols,setIncludeSymbols] = useState(false)

  const [savePassword,setSavePassword] = useState([])
 

  useEffect(() => {
   
    let chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcedefghijklmnopqrstuvwxyz`;
    if(includeNumbers){
      chars+="0123456789"
    }
    if(includeSymbols){
      chars+="!@#$%^&*?~"
    }

    let randomPassword = "";
    for (let i = 0; i < progress; i++) {
      randomPassword += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(randomPassword);
    console.log("render");
    
  },[progress,includeNumbers,includeSymbols]); // Always remember to give dependency otherwise password state cause re-render with useEffect and the loop goes on.


  const handleSave = () => {
    setSavePassword(prev=>[...prev,password])
  };
  const handleCopy = () => {
    console.log(passwordRef.current);
    
    passwordRef.current.select();
    navigator.clipboard.writeText(passwordRef.current.value);
    passwordRef.current.setSelectionRange(0,maxLength);
  };
  const handleReset = () => {
   setProgress(8)
   setIncludeNumbers(false)
   setIncludeSymbols(false)
  };
  return (
    <>
      <div className="flex flex-col justify-center  gap-3 h-screen w-[600px] mx-auto select-none">
        <h2 className="text-center font-bold text-xl mb-3 text-gray-100">
          Password Generator
        </h2>
        <input
          className="bg-zinc-200 p-2 rounded-lg font-medium text-[#111] focus:outline-none"
          type="text"
          ref={passwordRef}
          value={password}
          readOnly
          />
         
        <input
          type="range"
          title={progress}
          min={0}
          max={maxLength}
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
        />

        
          <label htmlFor="number" className=" text-gray-200">
            <input type="checkbox" id="number" checked={includeNumbers}
            onChange={(e)=>setIncludeNumbers(e.target.checked)}/> Number Allowed
          </label>
          <label htmlFor="character" className=" text-gray-200">
            <input type="checkbox" id="character" checked={includeSymbols}
            onChange={(e)=>setIncludeSymbols(e.target.checked)}/> Special Character Allowed
          </label>
        

        <Button handleClick={handleCopy}>Copy Password</Button>
        <Button handleClick={handleSave}>Save Password</Button>
        <Button handleClick={handleReset}>Reset Password</Button>

<div className="text-zinc-300">
{savePassword.map((pass,i)=>(

        <p key={i}>Saved Password:  {pass}</p>
))}
        
</div>
      </div>
    </>
  );
}

export default App;

