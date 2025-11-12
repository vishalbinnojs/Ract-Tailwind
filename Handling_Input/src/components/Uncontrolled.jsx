import React ,{useRef} from "react";

const Uncontrolled = () => {
  const inputRef = useRef(null)

// ✅ You are not using useState to store or control the input value.
// ✅ The input’s value lives inside the DOM, not React’s state.
// ✅ You access it directly using ref → that’s exactly what uncontrolled means.
// ❌  Uncontrolled not recommended.
  return (
    <>
    <div className="h-screen flex flex-col justify-center items-center gap-2">

    <input
          type="text"
          placeholder="Enter name"
          className="px-2 border-2"
          ref={inputRef}
          onChange={()=>console.log(inputRef.current.value)
            
          } />
          {/* If you want to render input value on browser then it will throw an error saying cann't read properties of null that's why  it is uncontrolled and not recommended to use*/}
          {/* <h1>{inputRef.current.value}</h1> */}
          </div>
    </>
  )
};

export default Uncontrolled;
