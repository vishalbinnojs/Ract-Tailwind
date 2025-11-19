import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    tc: false,
  });

  const handleForm = (e) => {
    const { id, type, value, checked } = e.target;

    setForm({
      ...form,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 h-screen select-none">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleForm}
            />
          </label>
          <label htmlFor="tc">
            <input
              id="tc"
              type="checkbox"
              checked={form.tc}
              onChange={handleForm}
            />
            Terms & Conditions
          </label>
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;

// Uncontrolled checkbox
// import React, {  useRef } from "react";
// const Form = () => {
//   const inputRef = useRef(null);

//   return (
//     <>
//       <div className="flex flex-col justify-center items-center gap-3 h-screen select-none">
//         <input
//           type="checkbox"
//           ref={inputRef}
//           onChange={() => console.log(inputRef.current.checked)}
//         />
//       </div>
//     </>
//   );
// };

// export default Form;
