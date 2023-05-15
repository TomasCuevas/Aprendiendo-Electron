import { useEffect, useState } from "react";
import { Image } from "semantic-ui-react";

//* service *//
import { getOneArtist } from "@/services";

//* styles *//
import "./albumInfo.scss";

//* interfaces *//
import { IAlbum, IArtist } from "@/interfaces";
import { Link } from "react-router-dom";

interface Props {
  album: IAlbum;
}

export const AlbumInfo: React.FC<Props> = ({ album }) => {
  const [artistData, setArtistData] = useState<IArtist>();

  useEffect(() => {
    (async () => {
      try {
        const response = await getOneArtist(album.artist);
        setArtistData(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [album]);

  return (
    <div className="album__info">
      <Image src={album.image} alt={album.name} />
      <div>
        <h1>{album.name}</h1>
        {artistData && (
          <p>
            De <Link to={`/artist/${artistData.id}`}>{artistData?.name}</Link>
          </p>
        )}
      </div>
    </div>
  );
};
