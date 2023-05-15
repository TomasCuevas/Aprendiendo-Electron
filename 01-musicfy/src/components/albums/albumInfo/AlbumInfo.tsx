//* styles *//
import { Image } from "semantic-ui-react";
import "./albumInfo.scss";

//* interfaces *//
import { IAlbum } from "@/interfaces";

interface Props {
  album: IAlbum;
}

export const AlbumInfo: React.FC<Props> = ({ album }) => {
  return (
    <div className="album__info">
      <Image src={album.image} alt={album.name} />
      <div>
        <h1>{album.name}</h1>
        <p>De *NOMBRE ARTISTA*</p>
      </div>
    </div>
  );
};
