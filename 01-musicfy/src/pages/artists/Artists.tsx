import { useEffect, useState } from "react";

//* services *//
import { getAllArtists } from "@/services";

//* interface *//
import { IArtist } from "@/interfaces";

export const Artists: React.FC = () => {
  const [artists, setArtists] = useState<IArtist[] | any[]>([]);

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
    <div>
      <h1>Artists</h1>
    </div>
  );
};
