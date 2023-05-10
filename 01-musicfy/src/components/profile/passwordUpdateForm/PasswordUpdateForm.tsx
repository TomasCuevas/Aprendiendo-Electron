import { useState } from "react";
import { Form } from "semantic-ui-react";

interface Props {
  onClose(): void;
}

export const PasswordUpdateForm: React.FC<Props> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form>
      <Form.Input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Contraseña actual"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: () => setShowPassword((prev) => !prev),
        }}
      />
      <Form.Input
        type={showPassword ? "text" : "password"}
        name="newPassword"
        placeholder="Nueva Contraseña"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: () => setShowPassword((prev) => !prev),
        }}
      />
      <Form.Input
        type={showPassword ? "text" : "password"}
        name="repeatPassword"
        placeholder="Repetir la nueva Contraseña"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: () => setShowPassword((prev) => !prev),
        }}
      />
      <Form.Button type="submit" primary fluid>
        Actualizar contraseña
      </Form.Button>
    </Form>
  );
};
