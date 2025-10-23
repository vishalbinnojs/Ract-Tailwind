import React, { useState, useRef } from "react";

const State = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  
  const ipRef = useRef();

  const handleAdd = () => {
    const value = ipRef.current.value.trim();
    console.log(value);

    if (value) {
      setData((prev) => [...prev, value]);
      setInputValue("")
    }
  };

  return (
    <>
      <input
        className="bg-gray-100 w-64 outline-0 my-1 text-gray-700 p-2 text-[1rem] border-2 border-gray-300"
        type="text"
        ref={ipRef}
        placeholder="ENTER TEXT"
        value={inputValue}
        onChange={(event)=> setInputValue(event.target.value)}
      
      />
      <button
        className="bg-green-400 py-1 px-3 rounded-lg m-1 text-lg font-bold"
        onClick={handleAdd}
      >
        Add Name
      </button>
      {data.map((item, index) => (
        <h1 className="bg-blue-500 p-2 mb-1" key={index}>
          {item}
        </h1>
      ))}
    </>
  );
};

export default State;
