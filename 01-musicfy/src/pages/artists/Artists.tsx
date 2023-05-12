import { useEffect, useState } from "react";

//* services *//
import { getAllArtists } from "@/services";

//* components *//
import { ListArtists } from "@/components/artist";

//* styles *//
import "./artists.scss";

//* interface *//
import { IArtist } from "@/interfaces";

export const Artists: React.FC = () => {
  const [artists, setArtists] = useState<IArtist[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllArtists();
        setArtists(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="artists__page">
      <h1>Artists</h1>
      <ListArtists artists={artists} />
    </div>
  );
};
