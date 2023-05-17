import {
  collection,
  doc,
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
const COLLECTION_NAME = "songs";

//* interface *//
import { ISong } from "@/interfaces";

//! create song [service]
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

//! get all songs by album [service]
export const getAllSongsByAlbumService = async (albumId: string) => {
  try {
    const whereRef = where("album", "==", albumId);
    const collectionRef = collection(database, COLLECTION_NAME);
    const queryRef = query(collectionRef, whereRef);

    const snapshot = await getDocs(queryRef);
    return snapshot.docs.map((song) => song.data()) as ISong[];
  } catch (error) {
    throw error;
  }
};

//! get last songs [service]
export const getLastSongs = async (limitItems = 20) => {
  try {
    const collectionRef = collection(database, COLLECTION_NAME);
    const orderByRef = orderBy("createdAt", "desc");
    const limitRef = limit(limitItems);
    const queryRef = query(collectionRef, orderByRef, limitRef);

    const snapshot = await getDocs(queryRef);
    return snapshot.docs.map((album) => album.data()) as ISong[];
  } catch (error) {
    throw error;
  }
};
