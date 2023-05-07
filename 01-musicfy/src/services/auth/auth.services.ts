import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

//* interfaces *//
import { IRegister, ILogin } from "@/interfaces";

//! register user
export const registerUser = async ({ email, password }: IRegister) => {
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
};

//! login user
export const loginUser = async ({ email, password }: ILogin) => {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
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
