import React, { useState } from "react";

const Checked = () => {
  // const [isChecked,setIsChecked] = useState(true)
  // console.log(isChecked);

  const [language, setLanguage] = useState({
    html: false,
    css: false,
    js: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setLanguage({
        ...language,
      [name]: checked  // name as key and  checked as status of input field(true/false)
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 h-screen">
        {/* <label htmlFor="cb" className="select-none">
          <input id="cb" type="checkbox" checked={isChecked}
          onChange={(e)=>setIsChecked(e.target.checked)}/> Terms and conditions
        </label> */}
        <label htmlFor="html" className="select-none">
          <input
            id="html"
            name="html"
            type="checkbox"
            checked={language.html}
            onChange={handleChange}
          />
          HTML
        </label>
        <label htmlFor="css" className="select-none">
          <input
            id="css"
            name="css"
            type="checkbox"
            checked={language.css}
            onChange={handleChange}
          />
          CSS
        </label>
        <label htmlFor="js" className="select-none">
          <input
            id="js"
            name="js"
            type="checkbox"
            checked={language.js}
            onChange={handleChange}
          />
          JS
        </label>
        {language.html && "HTML Selected"} <br />
        <br />
        {language.css && "CSS Selected"} <br />
        <br />
        {language.js && "JS Selected"}
      </div>
    </>
  );
};

export default Checked;


// WITH ARRAY
// import React, { useState } from "react";

// const Checked = () => {


//   const [language, setLanguage] = useState([]);
// console.log(language);

//   const handleChange = (e) => {
    
//     setLanguage(language => {
//       return(
//             language.includes(e.target.value)
//             ?
//             language.filter((item) => item !== e.target.value)
//             :
//             [...language, e.target.value]
//       )
//     });
//   };

//   return (
//     <>
//       <div className="flex flex-col justify-center items-center gap-3 h-screen">
       
//         <label htmlFor="html" className="select-none">
//           <input
//             id="html"
//             value="html"
//             type="checkbox"
//             checked={language.includes("html")}
//             onChange={handleChange}
//           />
//           HTML
//         </label>
//         <label htmlFor="css" className="select-none">
//           <input
//             id="css"
//             value="css"
//             type="checkbox"
//             checked={language.includes("css")}
//             onChange={handleChange}
//           />
//           CSS
//         </label>
//         <label htmlFor="js" className="select-none">
//           <input
//             id="js"
//             value="js"
//             type="checkbox"
//             checked={language.includes("js")}
//             onChange={handleChange}
//           />
//           JS
//         </label>
//         {language.html && "HTML Selected"} <br />
//         <br />
//         {language.css && "CSS Selected"} <br />
//         <br />
//         {language.js && "JS Selected"}
//       </div>
//     </>
//   );
// };

// export default Checked;
