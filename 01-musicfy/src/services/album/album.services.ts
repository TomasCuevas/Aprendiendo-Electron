import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";

//* database *//
import { database } from "@/utils";

//* collection name *//
const COLLECTION_NAME = "albums";

//* interfaces *//
import { IAlbum } from "@/interfaces";

//! create album [service]
export const createAlbum = async (
  name: string,
  image: string,
  artist: string
) => {
  try {
    const id = uuid();
    const createdAt = new Date();
    const data = { id, name, image, artist, createdAt };

    const docRef = doc(database, COLLECTION_NAME, id);
    await setDoc(docRef, data);
  } catch (error) {
    throw error;
  }
};

//! get all albums [service]
export const getAllAlbums = async () => {
  try {
    const collectionRef = collection(database, COLLECTION_NAME);
    const snapshot = await getDocs(collectionRef);

    return snapshot.docs.map((doc) => doc.data()) as IAlbum[];
  } catch (error) {
    throw error;
  }
};

//! get one album [service]
export const getOneAlbum = async (id: string) => {
  try {
    const docRef = doc(database, COLLECTION_NAME, id);
    const snapshot = await getDoc(docRef);

    return snapshot.data() as IAlbum;
  } catch (error) {
    throw error;
  }
};
