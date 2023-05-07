import { Button } from "semantic-ui-react";

//* service *//
import { logoutUser } from "@/services";

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Screen</h1>
      <Button color="red" onClick={logoutUser}>
        Cerrar Sesión
      </Button>
    </div>
  );
};
