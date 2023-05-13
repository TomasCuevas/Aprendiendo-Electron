import { setDoc, doc, collection, getDocs, getDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";

//* database *//
import { database } from "@/utils";

//* collection name
const ARTISTS_COLLECTION = "artists";

//* interfaces *//
import { IArtist } from "@/interfaces";

//! create artist [service]
export const createArtist = async (image: string, name: string) => {
  try {
    const idArtist = uuid();
    const createdAt = new Date().getTime();
    const data = { id: idArtist, image, name, createdAt };

    const docRef = doc(database, ARTISTS_COLLECTION, idArtist);
    await setDoc(docRef, data);
  } catch (error) {
    throw error;
  }
};

//! get all artists [service]
export const getAllArtists = async () => {
  try {
    const docRef = collection(database, ARTISTS_COLLECTION);
    const snapshot = await getDocs(docRef);

    return snapshot.docs.map((doc) => doc.data()) as IArtist[];
  } catch (error) {
    throw error;
  }
};

//! get one arstist [service]
export const getOneArtist = async (id: string) => {
  try {
    const docRef = doc(database, ARTISTS_COLLECTION, id);
    const snapshot = await getDoc(docRef);

    return snapshot.data() as IArtist;
  } catch (error) {
    throw error;
  }
};
