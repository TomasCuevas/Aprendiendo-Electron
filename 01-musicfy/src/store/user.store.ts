import { create } from "zustand";
import { User, getAuth, updateProfile } from "firebase/auth";

//* interface *//
interface useUserState {
  getMe(): User | null;
  updateAvatar(url: string): Promise<void>;
  updateDisplayName(displayName: string): Promise<void>;
}

export const useUserStore = create<useUserState>((set, get) => ({
  getMe() {
    return getAuth().currentUser;
  },
  async updateAvatar(url) {
    try {
      const auth = getAuth().currentUser;
      await updateProfile(auth!, { photoURL: url });
    } catch (error) {
      throw error;
    }
  },
  async updateDisplayName(displayName: string) {
    try {
      const auth = getAuth().currentUser;
      await updateProfile(auth!, { displayName });
    } catch (error) {
      throw error;
    }
  },
}));
