//* styles *//
import { Grid, Image, Loader } from "semantic-ui-react";
import "./listAlbums.scss";

//* interfaces *//
import { IAlbum } from "@/interfaces";
import { Link } from "react-router-dom";

interface Props {
  albums: IAlbum[];
}

export const ListAlbums: React.FC<Props> = ({ albums }) => {
  if (albums.length === 0)
    return (
      <Loader active inline="centered" size="large">
        Cargando
      </Loader>
    );

  return (
    <Grid className="list__albums">
      <Grid.Row columns={5}>
        {albums.map((album) => (
          <Grid.Column
            key={album.id}
            as={Link}
            to={`/album/${album.id}`}
            className="list__albums-album"
          >
            <Image src={album.image} alt={album.name} />
            <p>{album.name}</p>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};
