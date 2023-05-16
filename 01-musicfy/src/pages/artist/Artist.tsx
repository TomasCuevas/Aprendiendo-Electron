import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//* service *//
import {
  getAllAlbumsByArtist,
  getAllSongsByAlbumService,
  getOneArtist,
} from "@/services";

//* components *//
import { ArtistBanner } from "@/components/artist";
import { Slider } from "@/components/shared";

//* styles *//
import "./artist.scss";

//* interface *//
import { IAlbum, IArtist, ISong } from "@/interfaces";

export const Artist: React.FC = () => {
  const [artist, setArtist] = useState<IArtist>();
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [songs, setSongs] = useState<ISong[]>([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await getOneArtist(id!);
        setArtist(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllAlbumsByArtist(id!);
        setAlbums(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  useEffect(() => {
    if (albums) {
      (async () => {
        try {
          let data = [];
          for await (const item of albums) {
            const response = await getAllSongsByAlbumService(item.id);
            const dataTemp = response.map((dataSong) => ({
              ...dataSong,
              image: item.image,
            }));

            data.push(...dataTemp);
          }

          console.log(data);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [albums]);

  if (!artist) return <></>;

  return (
    <div className="artist__page">
      <ArtistBanner image={artist.image} name={artist.name} />

      <div className="artist__page-slider">
        <h2>ALBUMES</h2>
        <Slider data={albums || []} basepath="album" />
      </div>

      <div className="artist__page-slider">
        <h2>CANCIONES</h2>
      </div>
    </div>
  );
};
