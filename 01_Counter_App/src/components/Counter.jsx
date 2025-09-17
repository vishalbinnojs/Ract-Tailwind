import React, { useState } from "react";

import Button from "./Button";
const Counter = () => {
  const [count, setCount] = useState(0);


  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    if (count <= 0) {
      setCount((c) => 0);
    } else {
      setCount((c) => c - 1);
    }
  };
  const reset = () => {
    setCount((c) => 0);
  };

  return (
    <>
    <div className="flex justify-center items-center min-h-screen">
     <div className="flex flex-col items-center gap-4 text-center w-[300px] p-[2rem] rounded-[2rem] bg-[#fef] border-[5px] border-[#fcf] shadow-[0_0_10px_#444] hover:shadow-[0_0_10px_#111] cursor-pointer">
          <h1 className="font-bold ">Counter App</h1>
          <h4>
            Current Count: <span className="text-4xl">{" "}{count}</span>
          </h4>
          <div className="flex gap-3">
            <Button text="➕ INCREMENT" func={increment} />
            <Button text="➖ DECREMENT" func={decrement} />
            <Button text="🔄 RESET" func={reset} />
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Counter;
