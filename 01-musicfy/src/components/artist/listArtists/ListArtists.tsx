import { Grid, Loader } from "semantic-ui-react";

//* styles *//
import "./listArtists.scss";

//* interfaces *//
import { IArtist } from "@/interfaces";
import { Link } from "react-router-dom";

interface Props {
  artists: IArtist[];
}

export const ListArtists: React.FC<Props> = ({ artists }) => {
  if (artists.length < 1)
    return (
      <Loader active inline="centered" size="large">
        Cargando
      </Loader>
    );

  return (
    <Grid className="list__artists">
      <Grid.Row columns={5}>
        {artists.map((artist) => (
          <Grid.Column
            key={artist.id}
            as={Link}
            to={`/artist/${artist.id}`}
            className="list__artists-artist"
          >
            <div style={{ backgroundImage: `url(${artist.image})` }}></div>
            <p>{artist.name}</p>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};
