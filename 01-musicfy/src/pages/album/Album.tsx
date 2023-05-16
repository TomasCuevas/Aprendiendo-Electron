import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";

//* service *//
import { getAllSongsByAlbumService, getOneAlbum } from "@/services";

//* components *//
import { AlbumInfo } from "@/components/album";
import { ListSongs } from "@/components/song";

//* styles *//
import "./album.scss";

//* interfaces *//
import { IAlbum, ISong } from "@/interfaces";

export const Album: React.FC = () => {
  const [album, setAlbum] = useState<IAlbum>();
  const [songs, setSongs] = useState<ISong[]>([]);
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

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllSongsByAlbumService(id!);
        setSongs(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  if (!album)
    return (
      <Loader active inline="centered" size="large">
        Cargando
      </Loader>
    );

  return (
    <div className="album__page">
      <AlbumInfo album={album} />
      <ListSongs songs={songs} miniature={album.image} />
    </div>
  );
};
