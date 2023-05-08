import { create } from "zustand";
import { User, getAuth } from "firebase/auth";

//* interface *//
interface useAuthState {
  getMe(): User | null;
}

export const useAuthStore = create<useAuthState>(() => ({
  getMe() {
    return getAuth().currentUser;
  },
}));
