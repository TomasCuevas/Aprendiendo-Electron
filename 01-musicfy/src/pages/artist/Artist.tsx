import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//* service *//
import { getAllAlbumsByArtist, getOneArtist } from "@/services";

//* components *//
import { ArtistBanner } from "@/components/artist";

//* styles *//
import "./artist.scss";

//* interface *//
import { IAlbum, IArtist } from "@/interfaces";

export const Artist: React.FC = () => {
  const [artist, setArtist] = useState<IArtist>();
  const [albums, setAlbums] = useState<IAlbum[]>();
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

  if (!artist) return <></>;

  return (
    <div className="artist__page">
      <ArtistBanner image={artist.image} name={artist.name} />

      <div className="artist__page-slider">
        <h2>ALBUMES</h2>
      </div>

      <div className="artist__page-slider">
        <h2>CANCIONES</h2>
      </div>
    </div>
  );
};
