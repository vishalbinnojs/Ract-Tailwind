import { useState } from "react";

import Button from "./Button";
import Modal from "./Modal";
import ModalData from "./ModalData";
function Popup() {
  const [openModal, setOpenModal] = useState(false);

  let [currentIndex, setCurrentIndex] = useState(0);


  const handleClick = (e) => {
    e.stopPropagation();
    setOpenModal(true);
    setCurrentIndex(0);
  };
  
  const handleClick2 = (e) => {
    e.stopPropagation();
    setOpenModal(true);
    setCurrentIndex(1);
  };

  return (
    <>
      <div className="bg-[#242424] min-h-screen flex flex-col justify-center items-center text-gray-200">
        <h1 className="text-2xl text-center font-extralight">Click to See Popup</h1>
      <div className="flex gap-2 justify-center align-center mt-4">
        <Button handleClick={handleClick} color="#111">
          Edit
        </Button>
        <Button handleClick={handleClick2} color="#111">
          Delete
        </Button>
      </div>

      {openModal && <Modal setOpenModal={setOpenModal} modalData={ModalData[currentIndex]} />}
      </div>
    </>
  );
}

export default Popup;
