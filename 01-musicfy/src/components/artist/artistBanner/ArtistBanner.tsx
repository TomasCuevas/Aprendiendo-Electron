//* styles *//
import "./artistBanner.scss";

//* interface *//
interface Props {
  image: string;
  name: string;
}

export const ArtistBanner: React.FC<Props> = ({ image, name }) => {
  return (
    <div className="artist__banner">
      <div
        className="artist__banner-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <span>Artista</span>
        <h1>{name}</h1>
      </div>

      <div className="artist__banner-gradient" />
    </div>
  );
};
