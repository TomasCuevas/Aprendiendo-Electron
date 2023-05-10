import { Link, useNavigate } from "react-router-dom";
import { Icon, Image } from "semantic-ui-react";

//* assets *//
import { defaultUser } from "@/assets";

//* service *//
import { logoutUser } from "@/services";

//* styles *//
import "./topBar.scss";
import { useUserStore } from "@/store";

export const TopBar: React.FC = () => {
  const navigation = useNavigate();
  const { getMe } = useUserStore();

  const displayName = getMe()?.displayName || "Mi cuenta";
  const avatar = getMe()?.photoURL || defaultUser;

  const goBack = () => navigation(-1);

  return (
    <div className="top__bar">
      <Icon name="angle left" className="top__bar-back" link onClick={goBack} />
      <div className="top__bar-right">
        <Link to="/profile">
          <Image src={avatar} avatar />
          <span>{displayName}</span>
        </Link>
        <Icon name="power" link onClick={logoutUser} />
      </div>
    </div>
  );
};
