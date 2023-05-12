import { setDoc, doc, collection, getDocs } from "firebase/firestore";
import { v4 as uuid } from "uuid";

//* database *//
import { database } from "@/utils";

//* collection name
const COLLECTION_ARTIST_NAME = "artists";

//* interfaces *//
import { IArtist } from "@/interfaces";

//! create artist [service]
export const createArtist = async (image: string, name: string) => {
  try {
    const idArtist = uuid();
    const createdAt = new Date().getTime();
    const data = { id: idArtist, image, name, createdAt };

    const docRef = doc(database, COLLECTION_ARTIST_NAME, idArtist);
    await setDoc(docRef, data);
  } catch (error) {
    throw error;
  }
};

//! get all artists [service]
export const getAllArtists = async () => {
  try {
    const docRef = collection(database, COLLECTION_ARTIST_NAME);
    const snapshot = await getDocs(docRef);

    return snapshot.docs.map((doc) => doc.data()) as IArtist[];
  } catch (error) {
    throw error;
  }
};
