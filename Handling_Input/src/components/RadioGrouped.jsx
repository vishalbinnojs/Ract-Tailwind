// import { useState } from "react";

// const RadioGrouped = () => {
//   const [selectLang, setSelectLang] = useState("");
//   const languages = ["Javascript", "Html", "Css", "React"];
//   console.log(selectLang);

//   const handleChange = (e) => {
//     setSelectLang(e.target.value);
//   };

//   return (
//     <>
//       <div className="flex flex-col justify-center gap-3 items-center h-screen select-none">
//         {languages.map((lang, index) => (
//           <label key={index} htmlFor={lang}>
//             <input
//               id={lang}
//               name="language"
//               type="radio"
//               value={lang}
//               checked={selectLang === lang}
//               onChange={handleChange}
//             />{" "}
//             {lang.toUpperCase()}
//           </label>
//         ))}
//       </div>
//       ;
//     </>
//   );
// };

// export default RadioGrouped;
import { useState } from "react";

const RadioGrouped = () => {
  const [selectPayment, setSelectPayment] = useState({});
  const payments = [
    { id: "UPI", info: "Instant transfer via UPI apps." },
    { id: "Card", info: "Pay using debit or credit card." },
    { id: "COD", info: "Pay when the order arrives." },
  ];
  console.log(selectPayment);



  const handleChange = (method) => {
    setSelectPayment(method);
  };

  return (
    <>
      <div className="flex  justify-center gap-3 items-center select-none h-[10rem]">
        {payments.map((method, index) => (
       
          <label key={index} htmlFor={method.id}>
            <input
              id={method.id}
              type="radio"
              name="payment_method"
            //   value={method.id}
              checked={selectPayment.id === method.id}
              onChange={()=>handleChange(method)}
            />{" "}
           {method.id.toUpperCase()}
         
          </label>
        ))}
       
      </div>
        <div className="details flex justify-center flex-col items-center">
            <p>Payment method: {selectPayment.id}</p>
            <p>Payment details: {selectPayment.info}</p>
        </div>
    </>
  );
};

export default RadioGrouped;
