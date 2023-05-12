import { setDoc, doc } from "firebase/firestore";
import { v4 as uuid } from "uuid";

//* database *//
import { database } from "@/utils";

//! create artist [service]
export const createArtist = async (image: string, name: string) => {
  try {
    const idArtist = uuid();
    const createdAt = new Date();
    const data = { id: idArtist, image, name, createdAt };

    const docRef = doc(database, "artists", idArtist);
    await setDoc(docRef, data);
  } catch (error) {
    throw error;
  }
};
