import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

//* interfaces *//
import { IRegister } from "@/interfaces";

//! register user
export const registerUser = async ({ email, password }: IRegister) => {
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
};

//! logout user
export const logoutUser = async () => {
  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};