import { create } from "zustand";
import {
  EmailAuthProvider,
  User,
  getAuth,
  reauthenticateWithCredential,
  updateEmail,
  updateProfile,
} from "firebase/auth";

//* interface *//
interface useUserState {
  getMe(): User | null;
  updateAvatar(url: string): Promise<void>;
  updateDisplayName(displayName: string): Promise<void>;
  updateEmail(newEmail: string, password: string): Promise<void>;
}

export const useUserStore = create<useUserState>(() => ({
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
  async updateEmail(newEmail, password) {
    try {
      const auth = getAuth().currentUser;
      const email = auth!.email!;

      const credentials = EmailAuthProvider.credential(email, password);
      await reauthenticateWithCredential(auth!, credentials);
      await updateEmail(auth!, newEmail);
    } catch (error) {
      throw error;
    }
  },
}));
