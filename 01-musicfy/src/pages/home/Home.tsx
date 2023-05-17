import { useEffect, useState } from "react";

//* assets *//
import { bannerHome } from "@/assets";

//* services *//
import { getLastArtists } from "@/services";

//* styles *//
import "./home.scss";

//* interfaces *//
import { IArtist } from "@/interfaces";
import { Slider } from "@/components/shared";

export const Home: React.FC = () => {
  const [lastArtists, setLastArtists] = useState<IArtist[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getLastArtists();
        setLastArtists(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="home__page">
      <div
        className="home__page-banner"
        style={{ backgroundImage: `url(${bannerHome})` }}
      />

      <div className="home__page-slider">
        <h2>Últimos artistas</h2>
        <Slider data={lastArtists} basepath="artist" />
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
