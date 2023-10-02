import React from "react";
import "./modal.css";
import { useModalStore } from "../../zustand/modalStore";
interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props): JSX.Element => {
  const { modalState, setCloseModalState } = useModalStore();
  const handleModalCloseBtn = () => {
    setCloseModalState();
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
