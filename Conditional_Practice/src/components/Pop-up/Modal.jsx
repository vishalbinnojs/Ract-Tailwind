import React from "react";
import Button from "./Button"
const Modal = ({modalData,setOpenModal}) => {
    const {action,message} = modalData;
    
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-center">
        <span onClick={()=>setOpenModal(false)} className="absolute top-22 right-4  cursor-pointer hover:outline-1 p-1 rounded-lg bg-[#242424] hover:rotate-135 duration-300">❌</span>
        <div className="bg-gray-700 p-4 rounded min-w-[400px]">
          <h2 className="text-xl mb-4">{action}</h2>
          <p>{message}</p>
        
          <div className="flex gap-4 justify-center mt-4">
              <Button color="red">No</Button>
            <Button color="green">Yes</Button>
          </div>
        </div>
        
      </div>
    </>
  )
};

export default Modal;
