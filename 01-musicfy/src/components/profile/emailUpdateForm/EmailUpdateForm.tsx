import { useState } from "react";
import { Form } from "semantic-ui-react";

//* interface *//
interface Props {
  onClose(): void;
}

export const EmailUpdateForm: React.FC<Props> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Form>
      <Form.Input name="email" placeholder="Nuevo correo electrónico" />
      <Form.Input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Contraseña"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: () => setShowPassword((prev) => !prev),
        }}
      />
      <Form.Button type="submit" primary fluid>
        Actualizar email
      </Form.Button>
    </Form>
  );
};
