import React, { useState } from "react";

const Controlled = () => {
  // A controlled component is a form whose input field value is controlled by React's State.
     // 1. Store Input field value in state.
     // 2. Use onchange handler with input field
     // 3. value attribute is attached with state.
  const [ipValue, setIpValue] = useState("");
  console.log(ipValue);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 bg-[#242424] text-white h-screen">
        <input
          type="text"
          placeholder="Enter name"
          className="px-2 border-2"
          value={ipValue}
          onChange={(e) => setIpValue(e.target.value)}
        />

        <span>{ipValue}</span>

        <button
          onClick={() => setIpValue("")}
          className="rounded-lg bg-gray-700 px-3 py-1 border"
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default Controlled;
