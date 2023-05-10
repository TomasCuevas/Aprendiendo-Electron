import { Button } from "semantic-ui-react";

//* components *//
import { AvatarUpdate } from "@/components/profile";
import { BasicModal } from "@/components/shared";

//* styles *//
import "./profile.scss";

//* store *//
import { useUserStore } from "@/store";
import { useState } from "react";

export const Profile: React.FC = () => {
  const { getMe } = useUserStore();
  const user = getMe();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [contentModal, setContentModal] = useState<any>(null);
  const [titleModal, setTitleModal] = useState("");

  const onCloseModal = () => {
    setShowModal(false);
    setContentModal(null);
    setTitleModal("");
  };

  const openForm = (type: "displayName" | "email" | "password") => {
    if (type === "displayName") {
      setTitleModal("Actualizar nombre y apellido");
      setContentModal(<h1>Form DisplayName</h1>);
    }

    if (type === "email") {
      setTitleModal("Actualizar email");
      setContentModal(<h1>Form Email</h1>);
    }

    if (type === "password") {
      setTitleModal("Actualizar contraseña");
      setContentModal(<h1>Form Password</h1>);
    }

    setShowModal(true);
  };

  return (
    <>
      <div className="profile">
        <h1>Configuración</h1>
        <div className="profile__block">
          <div>
            <AvatarUpdate />
            <span>{user?.displayName}</span>
          </div>
          <Button onClick={() => openForm("displayName")}>Actualizar</Button>
        </div>

        <div className="profile__block">
          <span>Email: {user?.email}</span>
          <Button onClick={() => openForm("email")}>Actualizar</Button>
        </div>

        <div className="profile__block">
          <span>Contraseña: *********</span>
          <Button onClick={() => openForm("password")}>Actualizar</Button>
        </div>
      </div>

      <BasicModal
        show={showModal}
        onClose={onCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
};
