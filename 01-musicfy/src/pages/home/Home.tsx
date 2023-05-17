//* assets *//
import { bannerHome } from "@/assets";

//* styles *//
import "./home.scss";

export const Home: React.FC = () => {
  return (
    <div className="home__page">
      <div
        className="home__page-banner"
        style={{ backgroundImage: `url(${bannerHome})` }}
      />

      <div className="home__page-slider">
        <h2>Últimos artistas</h2>
      </div>

      <div className="home__page-slider">
        <h2>Últimos albumes</h2>
      </div>

      <div className="home__page-slider">
        <h2>Últimas canciónes</h2>
      </div>
    </div>
  );
};
