import React from "react";
import "./modal.css";
interface Props {
  children: React.ReactNode;
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, modalState, setModalState }: Props): JSX.Element => {
  const handleModalCloseBtn = () => {
    setModalState(false);
  };
  return (
    <>
      <dialog open={modalState} className="modal-container">
        <button onClick={handleModalCloseBtn} className="modal-close__button">
          X
        </button>
        {children}
      </dialog>
      <div onClick={handleModalCloseBtn} className="modal-bg"></div>
    </>
  );
};

export default Modal;
