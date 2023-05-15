import { useEffect, useState } from "react";

//* services *//
import { getAllAlbums } from "@/services";

//* interface *//
import { IAlbum } from "@/interfaces";

export const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllAlbums();
        setAlbums(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Albums</h1>
    </div>
  );
};
