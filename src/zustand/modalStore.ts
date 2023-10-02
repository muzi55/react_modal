import { create } from "zustand";

interface ModalType {
  modalState: boolean;
  setOpenModalState: () => void;
  setCloseModalState: () => void;
}
export const useModalStore = create<ModalType>((set) => ({
  modalState: false,
  setOpenModalState: () => set(() => ({ modalState: true })),
  setCloseModalState: () => set(() => ({ modalState: false })),
}));
