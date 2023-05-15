import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";

//* service *//
import { getOneAlbum } from "@/services";

//* components *//
import { AlbumInfo } from "@/components/albums";

//* styles *//
import "./album.scss";

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

  if (!album)
    return (
      <Loader active inline="centered" size="large">
        Cargando
      </Loader>
    );

  return (
    <div className="album__page">
      <AlbumInfo album={album} />
    </div>
  );
};
