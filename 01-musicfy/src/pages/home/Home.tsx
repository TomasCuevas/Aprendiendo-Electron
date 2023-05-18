import { useEffect, useState } from "react";

//* assets *//
import { bannerHome } from "@/assets";

//* services *//
import {
  getLastAlbums,
  getLastArtists,
  getLastSongs,
  getOneAlbum,
} from "@/services";

//* components *//
import { Slider } from "@/components/shared";

//* styles *//
import "./home.scss";

//* interfaces *//
import { IAlbum, IArtist, ISongWithImage } from "@/interfaces";

export const Home: React.FC = () => {
  const [lastArtists, setLastArtists] = useState<IArtist[]>([]);
  const [lastAlbums, setLastAlbums] = useState<IAlbum[]>([]);
  const [lastSongs, setLastSongs] = useState<ISongWithImage[]>([]);

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

  useEffect(() => {
    (async () => {
      try {
        const response = await getLastAlbums();
        setLastAlbums(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await getLastSongs();

        let data = [];

        for await (const item of response) {
          const resultAlbum = await getOneAlbum(item.album);
          const dataTemp = { ...item, image: resultAlbum.image };

          data.push(dataTemp);
        }

        setLastSongs(data);
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
        {lastArtists ? <Slider data={lastArtists} basepath="artist" /> : null}
      </div>

      <div className="home__page-slider">
        <h2>Últimos albumes</h2>
        {lastAlbums ? <Slider data={lastAlbums} basepath="album" /> : null}
      </div>

      <div className="home__page-slider">
        <h2>Últimas canciónes</h2>
        {lastSongs ? <Slider data={lastSongs} song /> : null}
      </div>
    </div>
  );
};
