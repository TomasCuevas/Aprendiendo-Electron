import { Button } from "semantic-ui-react";

//* interface *//
interface Props {
  goLogin(): void;
  goRegister(): void;
}

export const AuthOptions: React.FC<Props> = ({ goLogin, goRegister }) => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <h1>AuthOptions</h1>

      <Button primary onClick={goRegister}>
        Registro
      </Button>
      <Button secondary onClick={goLogin}>
        Login
      </Button>
    </div>
  );
};
