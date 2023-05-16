import { doc, setDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";

//* database *//
import { database } from "@/utils";

//* collection name *//
const COLLECTION_NAME = "songs";

export const createSongService = async (
  name: string,
  album: string,
  file: string
) => {
  try {
    const id = uuid();
    const createdAt = new Date();
    const data = { id, name, album, file, createdAt };

    const docRef = doc(database, COLLECTION_NAME, id);
    await setDoc(docRef, data);
  } catch (error) {
    throw error;
  }
};
