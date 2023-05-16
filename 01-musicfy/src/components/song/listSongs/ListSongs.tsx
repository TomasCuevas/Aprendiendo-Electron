//* styles *//
import { Icon, Table } from "semantic-ui-react";
import "./listSongs.scss";

//* interfaces *//
import { ISong } from "@/interfaces";

interface Props {
  songs: ISong[];
  miniature: string;
}

export const ListSongs: React.FC<Props> = ({ miniature, songs }) => {
  if (songs.length < 1) {
    return <p className="no__songs">Este album aún no tiene canciónes</p>;
  }

  return (
    <Table className="list__songs" inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Título</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {songs.map((song) => (
          <Table.Row key={song.id}>
            <Table.Cell collapsing>
              <Icon name="play circle outline" />
            </Table.Cell>
            <Table.Cell>{song.name}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
