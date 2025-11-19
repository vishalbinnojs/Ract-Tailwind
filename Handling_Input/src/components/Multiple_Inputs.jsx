// import React, { useState } from "react";

// //Multiple inputs using object
// const Multiple_Inputs = () => {
//   const [info, setInfo] = useState({
//     name: "",
//     email: "",
//   });
//   console.log(info);

//   const handleChange = (e) => {
//     const { name, value} = e.target;
//     setInfo((info) => ({ ...info, [name]: value }));
//   };

//   function clear() {
//     return setInfo({
//       name: "",
//       email: "",
//     });
//   }
//   return (
//     <>
//       <div className="h-screen flex flex-col justify-center items-center gap-3 bg-[#242424] text-white">
//         <input
//           type="text"
//           name="name"
//           value={info.name}
//           className="px-2 border-2"
//           placeholder="Enter Name"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="email"
//           value={info.email}
//           className="px-2 border-2"
//           placeholder="Enter Email"
//           onChange={handleChange}
//         />
//         <p>
//           {info.name}::::{info.email}
//         </p>
//         <button
//           className="py-1 px-3 rounded-lg border cursor-pointer"
//           onClick={clear}
//         >
//           Clear
//         </button>
//       </div>
//     </>
//   );
// };

// export default Multiple_Inputs;


import React, { useState } from "react";

//Multiple inputs using ArrayOfObject
const Multiple_Inputs = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
  });
  const [record,setRecord] = useState([])
  console.log(info);
  console.log(record);
  

  const handleChange = (e) => {
    const { name, value} = e.target;
    setInfo((info) => ({ ...info, [name]: value }));
  };

  const addRecord = () => {
    setRecord((prev) => [...prev,info])
    setInfo({
      name: "",
      email: "",
    });
  }
  function clear() {
    return setInfo({
      name: "",
      email: "",
    });
  }
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-3 bg-[#242424] text-white">
        <input
          type="text"
          name="name"
          value={info.name}
          className="px-2 border-2"
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={info.email}
          className="px-2 border-2"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <p>
          {info.name}::::{info.email}
        </p>
        <button
          className="py-1 px-3 rounded-lg border cursor-pointer"
          onClick={clear}
        >
          Clear
        </button>
        <button
          className="py-1 px-3 rounded-lg border cursor-pointer"
          onClick={addRecord}
        >
          Add Record
        </button>
      </div>
    </>
  );
};

export default Multiple_Inputs;



