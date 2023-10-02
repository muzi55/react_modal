import React from "react";
import "./modal.css";
interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props): JSX.Element => {
  return (
    <>
      <dialog open className="modal-container">
        {children}
      </dialog>
      <div className="modal-bg"></div>
    </>
  );
};

export default Modal;
