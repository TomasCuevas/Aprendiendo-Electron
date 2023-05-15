import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//* services *//
import { getOneAlbum } from "@/services";

//* interface *//
import { IAlbum } from "@/interfaces";

export const Album: React.FC = () => {
  const [album, setAlbum] = useState<IAlbum>();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await getOneAlbum(id!);
        setAlbum(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  return (
    <div>
      <h1>Album</h1>
    </div>
  );
};
