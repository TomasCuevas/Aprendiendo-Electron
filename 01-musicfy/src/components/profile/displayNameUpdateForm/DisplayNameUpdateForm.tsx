import { Form } from "semantic-ui-react";

//* interface *//
interface Props {
  onClose(): void;
}

export const DisplayNameUpdateForm: React.FC<Props> = ({ onClose }) => {
  return (
    <Form>
      <Form.Input name="displayName" placeholder="Nombre y apellido" />
      <Form.Button type="submit" primary fluid>
        Actualizar nombre
      </Form.Button>
    </Form>
  );
};
