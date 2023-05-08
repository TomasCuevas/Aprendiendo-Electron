import { Link, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react";

//* styles *//
import "./leftMenu.scss";

export const LeftMenu: React.FC = () => {
  const { pathname } = useLocation();

  const isCurrentPage = (route: string) => pathname === route;

  return (
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
          onClick={() => console.log("Subir canción")}
        />
        <Menu.Item
          name="Nuevo album"
          icon="plus"
          link
          onClick={() => console.log("Crear album")}
        />
        <Menu.Item
          name="Nuevo artista"
          icon="plus"
          link
          onClick={() => console.log("Crear artista")}
        />
      </Menu>
    </div>
  );
};
