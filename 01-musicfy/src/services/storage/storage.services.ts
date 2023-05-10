import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

//! upload file [service]
export const uploadFileService = async (
  file: File,
  folder: string,
  nameFile: string
) => {
  try {
    const storage = getStorage();
    const fileRef = ref(storage, `${folder}/${nameFile}`);

    const metadata = { contentType: "image/jpeg" };
    const fileBuffer = await file.arrayBuffer();

    return await uploadBytes(fileRef, fileBuffer, metadata);
  } catch (error) {
    throw error;
  }
};

//! get url file [service]
export const getUrlFile = async (pathFile: string) => {
  try {
    const storage = getStorage();
    const fileRef = ref(storage, pathFile);

    return await getDownloadURL(fileRef);
  } catch (error) {
    throw error;
  }
};
