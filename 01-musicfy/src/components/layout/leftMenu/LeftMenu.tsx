import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react";

//* components *//
import { AddAlbumForm } from "@/components/album";
import { BasicModal } from "@/components/shared";
import { NewArtistForm } from "@/components/artist";

//* styles *//
import "./leftMenu.scss";
import { AddSongForm } from "@/components/song";

export const LeftMenu: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState<any>(null);

  const { pathname } = useLocation();

  const isCurrentPage = (route: string) => pathname === route;

  const onCloseModal = () => {
    setShowModal(false);
    setTitleModal("");
    setContentModal(null);
  };

  const openModal = (type: "artist" | "album" | "song") => {
    if (type === "artist") {
      setTitleModal("Nuevo artista");
      setContentModal(<NewArtistForm onClose={onCloseModal} />);
    }

    if (type === "album") {
      setTitleModal("Nuevo album");
      setContentModal(<AddAlbumForm onClose={onCloseModal} />);
    }

    if (type === "song") {
      setTitleModal("Nueva canción");
      setContentModal(<AddSongForm onClose={onCloseModal} />);
    }

    setShowModal(true);
  };

  return (
    <>
      <div className="left__menu">
        <Menu secondary vertical fluid>
          <Menu.Item
            as={Link}
            to="/"
            name="Inicio"
            icon="home"
            active={isCurrentPage("/")}
          />
          <Menu.Item
            as={Link}
            to="/artists"
            name="Artistas"
            icon="users"
            active={isCurrentPage("/artists")}
          />
          <Menu.Item
            as={Link}
            to="/albums"
            name="Albumes"
            icon="window maximize outline"
            active={isCurrentPage("/albums")}
          />
        </Menu>
        <Menu vertical fluid secondary>
          <Menu.Item
            name="Nueva canción"
            icon="plus"
            link
            onClick={() => openModal("song")}
          />
          <Menu.Item
            name="Nuevo album"
            icon="plus"
            link
            onClick={() => openModal("album")}
          />
          <Menu.Item
            name="Nuevo artista"
            icon="plus"
            link
            onClick={() => openModal("artist")}
          />
        </Menu>
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
