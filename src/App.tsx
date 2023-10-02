import React from "react";
import Modal from "./components/modal/Modal";
import { useModalStore } from "./zustand/modalStore";

function App() {
  const { modalState, setOpenModalState } = useModalStore();
  const handleModalOpenBtn = () => {
    setOpenModalState();
  };
  return (
    <>
      <h1>모달창</h1>
      <button onClick={handleModalOpenBtn}>모달창 열기</button>
      {modalState && (
        <Modal>
          <h2>오늘의 반찬</h2>
          <p>제육볶음, 김치, 콩자반</p>
        </Modal>
      )}
    </>
  );
}

export default App;
