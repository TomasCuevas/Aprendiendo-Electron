import {
  setDoc,
  doc,
  collection,
  getDocs,
  getDoc,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";

//* database *//
import { database } from "@/utils";

//* collection name *//
const COLLECTION_NAME = "artists";

//* interfaces *//
import { IArtist } from "@/interfaces";

//! create artist [service]
export const createArtist = async (image: string, name: string) => {
  try {
    const idArtist = uuid();
    const createdAt = new Date();
    const data = { id: idArtist, image, name, createdAt };

    const docRef = doc(database, COLLECTION_NAME, idArtist);
    await setDoc(docRef, data);
  } catch (error) {
    throw error;
  }
};

//! get all artists [service]
export const getAllArtists = async () => {
  try {
    const docRef = collection(database, COLLECTION_NAME);
    const snapshot = await getDocs(docRef);

    return snapshot.docs.map((doc) => doc.data()) as IArtist[];
  } catch (error) {
    throw error;
  }
};

//! get one arstist [service]
export const getOneArtist = async (id: string) => {
  try {
    const docRef = doc(database, COLLECTION_NAME, id);
    const snapshot = await getDoc(docRef);

    return snapshot.data() as IArtist;
  } catch (error) {
    throw error;
  }
};

//! get last artists [service]
export const getLastArtists = async (limitItems = 20) => {
  try {
    const collectionRef = collection(database, COLLECTION_NAME);
    const orderByRef = orderBy("createdAt", "desc");
    const limitRef = limit(limitItems);
    const queryRef = query(collectionRef, orderByRef, limitRef);

    const snapshot = await getDocs(queryRef);

    return snapshot.docs.map((artist) => artist.data()) as IArtist[];
  } catch (error) {
    throw error;
  }
};
