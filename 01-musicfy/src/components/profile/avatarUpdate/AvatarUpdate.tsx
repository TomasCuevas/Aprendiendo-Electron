import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Image } from "semantic-ui-react";

//* assets *//
import { defaultUser } from "@/assets";

//* service *//
import { uploadFileService } from "@/services";

//* styles *//
import "./avatarUpdate.scss";

//* store *//
import { useAuthStore } from "@/store";

export const AvatarUpdate: React.FC = () => {
  const { getMe } = useAuthStore();
  const user = getMe();

  const [avatarUrl, setAvatarUrl] = useState(user?.photoURL || defaultUser);

  const onDrop = useCallback(async (acceptedFile: File[]) => {
    const file = acceptedFile[0];
    setAvatarUrl(URL.createObjectURL(file));

    const response = await uploadFileService(file, "avatar", user!.uid);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="avatar__update" {...getRootProps()}>
      <input {...getInputProps()} />
      <Image src={avatarUrl} />
    </div>
  );
};
