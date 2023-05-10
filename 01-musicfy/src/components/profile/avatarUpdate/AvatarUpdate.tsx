import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Image } from "semantic-ui-react";

//* assets *//
import { defaultUser } from "@/assets";

//* styles *//
import "./avatarUpdate.scss";

//* store *//
import { useAuthStore } from "@/store";

export const AvatarUpdate: React.FC = () => {
  const { getMe } = useAuthStore();
  const user = getMe();

  const onDrop = useCallback(async (acceptedFile: any) => {
    console.log(acceptedFile);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="avatar__update" {...getRootProps()}>
      <input {...getInputProps()} />
      <Image src={user?.photoURL || defaultUser} />
    </div>
  );
};
