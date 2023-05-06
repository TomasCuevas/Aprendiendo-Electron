import { Button } from "semantic-ui-react";

//* styles *//
import "@/components/auth/authOptions.scss";

//* interface *//
interface Props {
  goLogin(): void;
  goRegister(): void;
}

export const AuthOptions: React.FC<Props> = ({ goLogin, goRegister }) => {
  return (
    <div className="auth-options">
      <h1>Millones de canciones gratis en Musicfy</h1>

      <Button className="register" onClick={goRegister}>
        Registrate gratis
      </Button>
      <Button className="login" onClick={goLogin}>
        Iniciar Sesión
      </Button>
    </div>
  );
};
