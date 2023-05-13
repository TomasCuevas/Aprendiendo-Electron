import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//* service *//
import { getOneArtist } from "@/services";

//* components *//
import { ArtistBanner } from "@/components/artist";

//* styles *//
import "./artist.scss";

//* interface *//
import { IArtist } from "@/interfaces";

export const Artist: React.FC = () => {
  const [artist, setArtist] = useState<IArtist>();
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
