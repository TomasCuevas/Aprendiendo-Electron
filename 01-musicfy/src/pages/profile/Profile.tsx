//* styles *//
import { Button } from "semantic-ui-react";
import "./profile.scss";

//* store *//
import { useAuthStore } from "@/store";

export const Profile: React.FC = () => {
  const { getMe } = useAuthStore();
  const user = getMe();

  return (
    <div className="profile">
      <h1>Configuración</h1>
      <div className="profile__block">
        <div>
          <p>AVATAR</p>
          <span>{user?.displayName}</span>
        </div>
        <Button onClick={() => console.log("Cambiar displayName")}>
          Actualizar
        </Button>
      </div>

      <div className="profile__block">
        <span>Email: {user?.email}</span>
        <Button onClick={() => console.log("Cambiar Email")}>Actualizar</Button>
      </div>

      <div className="profile__block">
        <span>Contraseña: *********</span>
        <Button onClick={() => console.log("Cambiar contraseña")}>
          Actualizar
        </Button>
      </div>
    </div>
  );
};
