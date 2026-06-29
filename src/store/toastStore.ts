import { create } from "zustand";

export interface ToastState {
  isOpen: boolean;
  message: string;
  showToast: (message: string) => void;
  hideToast: () => void;
}

const useToastStore = create<ToastState>((set) => ({
  isOpen: false,
  message: "",
  showToast: (message) => {
    set({ isOpen: true, message });
  },
  hideToast: () => {
    set({ isOpen: false });
  },
}));

export default useToastStore;
