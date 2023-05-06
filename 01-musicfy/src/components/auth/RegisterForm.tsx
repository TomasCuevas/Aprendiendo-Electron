import { Button } from "semantic-ui-react";

//* interface *//
interface Props {
  goBack(): void;
  goLogin(): void;
}

export const RegisterForm: React.FC<Props> = ({ goBack, goLogin }) => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <h1>RegisterForm</h1>

      <Button primary onClick={goLogin}>
        Login
      </Button>
      <Button secondary onClick={goBack}>
        Atras
      </Button>
    </div>
  );
};
