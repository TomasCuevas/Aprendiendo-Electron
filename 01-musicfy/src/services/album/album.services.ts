import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
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

//! get all albums by artist [service]
export const getAllAlbumsByArtist = async (artistId: string) => {
  try {
    const whereRef = where("artist", "==", artistId);
    const collectionRef = collection(database, COLLECTION_NAME);
    const queryRef = query(collectionRef, whereRef);
    const snapshot = await getDocs(queryRef);

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

//! get last albums [service]
export const getLastAlbums = async (limitItems = 20) => {
  try {
    const collectionRef = collection(database, COLLECTION_NAME);
    const orderByRef = orderBy("createdAt", "desc");
    const limitRef = limit(limitItems);
    const queryRef = query(collectionRef, orderByRef, limitRef);

    const snapshot = await getDocs(queryRef);

    return snapshot.docs.map((album) => album.data()) as IAlbum[];
  } catch (error) {
    throw error;
  }
};
