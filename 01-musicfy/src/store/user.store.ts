import { create } from "zustand";
import { User, getAuth, updateProfile } from "firebase/auth";

//* interface *//
interface useUserState {
  getMe(): User | null;
  updateAvatar(url: string): Promise<void>;
}

export const useUserStore = create<useUserState>((set, get) => ({
  getMe() {
    return getAuth().currentUser;
  },
  async updateAvatar(url) {
    const { getMe } = get();

    try {
      const auth = getMe();
      await updateProfile(auth!, { photoURL: url });
    } catch (error) {
      throw error;
    }
  },
}));
