import { useEffect, useState } from "react";

//* services *//
import { getAllAlbums } from "@/services";

//* styles *//
import "./albums.scss";

//* interface *//
import { IAlbum } from "@/interfaces";
import { ListAlbums } from "@/components/albums";

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
    <div className="albums__page">
      <h1>Albums</h1>
      <ListAlbums albums={albums} />
    </div>
  );
};
