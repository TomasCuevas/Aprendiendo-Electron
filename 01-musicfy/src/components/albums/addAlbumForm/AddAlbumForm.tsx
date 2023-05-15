import { Form, Image } from "semantic-ui-react";
import classNames from "classnames";

//* styles *//
import "./addAlbumForm.scss";

interface Props {
  onClose(): void;
}

export const AddAlbumForm: React.FC<Props> = ({ onClose }) => {
  return (
    <Form className="add__album-form">
      <div className="add__album-form-content">
        <div
          className={classNames("add__album-form-content-image", {
            error: false,
          })}
        >
          <Image src={null} className={classNames({ full: null })} />
        </div>

        <div className="add__album-form-content-input">
          <Form.Input name="name" placeholder="Nombre del álbum" />
          <Form.Dropdown
            placeholder="El álbum pertenece..."
            fluid
            search
            selection
            options={[]}
          />
        </div>
      </div>

      <Form.Button type="submit" primary fluid>
        Crear álbum
      </Form.Button>
    </Form>
  );
};
