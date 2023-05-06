import { Button, Form, Icon } from "semantic-ui-react";

//* styles *//
import "@/components/auth/registerForm.scss";

//* interface *//
interface Props {
  goBack(): void;
  goLogin(): void;
}

export const RegisterForm: React.FC<Props> = ({ goBack, goLogin }) => {
  return (
    <div className="register__form">
      <h1>Empieza a escuchar con una cuenta de Musicfy gratis</h1>

      <Form>
        <Form.Input
          placeholder="Correo electronico"
          icon="mail outline"
          type="text"
        />
        <Form.Input
          placeholder="Contraseña"
          icon={
            <Icon
              name="eye"
              link
              onClick={() => console.log("show password")}
            />
          }
          type="password"
        />
        <Form.Input
          placeholder="¿Cómo deberíamos llamarte?"
          icon="user cicle outline"
          type="text"
        />
        <Form.Button type="submit" primary fluid>
          Continuar
        </Form.Button>
      </Form>

      <div className="register__form-options">
        <p onClick={goBack}>Volver</p>
        <p>
          ¿Ya tienes Musicfy? <span onClick={goLogin}>Iniciar sesión</span>
        </p>
      </div>
    </div>
  );
};
