import { Link } from "react-router-dom";
import { Icon, Image } from "semantic-ui-react";

//* styles *//
import "./topBar.scss";

export const TopBar: React.FC = () => {
  const goBack = () => console.log("go back");
  const logout = () => console.log("logout");

  return (
    <div className="top__bar">
      <Icon name="angle left" className="top__bar-back" link onClick={goBack} />
      <div className="top__bar-right">
        <Link to="/profile">
          {/* <Image src={} avatar /> */}
          <span>USERNAME</span>
        </Link>
        <Icon name="power" link onClick={logout} />
      </div>
    </div>
  );
};
