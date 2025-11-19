import React,{useState} from "react";

const CheckedAll = () => {
 const [languages,setLanguages] = useState({
  html:false,
  css:false,
  js:false
 });


 const isAllChecked = Object.values(languages).every(item=> item===true)
 console.log(isAllChecked);
 
 const handleChange = (e) =>{
   const {id,checked} = e.target;
   setLanguages((languages)=>{
     return{
       ...languages,
       [id]:checked
      }
    })
  }
  
  const handleCheckedAll = (e) => {
   const {checked} = e.target;
   setLanguages({
     html:checked,
     css:checked,
     js:checked
   })
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 h-screen select-none">
        {/* <label htmlFor="html">
       <input id='html' type="checkbox" checked={languages.html}
       onChange={handleChange}/>{" "}HTML
        </label>
        <label htmlFor="css">
       <input id='css' type="checkbox" checked={languages.css}
       onChange={handleChange}/>{" "}CSS
        </label>
        <label htmlFor="js">
       <input id='js' type="checkbox" checked={languages.js}
       onChange={handleChange}/>{" "}JS
        </label> */}
        {Object.keys(languages).map((language,index)=>{
          return(
            <label key={index} htmlFor={language}>
              <input type="checkbox"
              id={language}
              checked={languages[language]}
              onChange={handleChange} />{" "}
              {language.toUpperCase()}
            </label>
          )
        })}
        <label htmlFor="all">
       <input id='all' type="checkbox" checked={isAllChecked}
       onChange={handleCheckedAll}/>{" "}Select All
        </label>

        {languages.html && "HTML Selected"}
        <br /><br />
        {languages.css && "CSS Selected"}
        <br /><br />
        {languages.js && "JS Selected"}
      </div>

    </>
  )
};

export default CheckedAll;
