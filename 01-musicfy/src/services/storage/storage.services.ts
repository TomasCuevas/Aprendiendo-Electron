import { getStorage, ref, uploadBytes } from "firebase/storage";

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
