import { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import classNames from "classnames";

//* styles *//
import "./addSongForm.scss";

//* interface *//
interface Props {
  onClose(): void;
}

export const AddSongForm: React.FC<Props> = ({ onClose }) => {
  const [songName, setSongName] = useState("");

  return (
    <Form className="add__song-form">
      <Form.Input name="name" placeholder="Nombre de la canción" />
      <Form.Dropdown
        placeholder="Asigna la canción a un álbum"
        fluid
        search
        selection
        options={[]}
      />

      <div className={classNames("add__song-form-file", { error: false })}>
        <Icon name="cloud upload" />
        <div>
          <p>
            Arrastra tu canción o haz click <span>aquí</span>
          </p>
          {songName && <p className="song__name">{songName}</p>}
        </div>
      </div>

      <Form.Button type="submit" primary>
        Subir canción
      </Form.Button>
    </Form>
  );
};
