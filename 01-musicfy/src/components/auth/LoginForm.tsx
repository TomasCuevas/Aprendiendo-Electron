import { Button } from "semantic-ui-react";

//* interface *//
interface Props {
  goBack(): void;
  goRegister(): void;
}

export const LoginForm: React.FC<Props> = ({ goBack, goRegister }) => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <h1>LoginForm</h1>

      <Button primary onClick={goRegister}>
        Registro
      </Button>
      <Button secondary onClick={goBack}>
        Atras
      </Button>
    </div>
  );
};
