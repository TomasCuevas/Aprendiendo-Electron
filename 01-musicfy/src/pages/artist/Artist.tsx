import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//* service *//
import { getOneArtist } from "@/services";

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

  return (
    <div>
      <h1>Artist</h1>
    </div>
  );
};
