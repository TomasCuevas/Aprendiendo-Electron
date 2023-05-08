//* styles *//
import "./loggedLayout.scss";

//* components *//
import { LeftMenu } from "@/components/leftMenu";

//* interface *//
interface Props {
  children: React.ReactNode;
}

export const LoggedLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="logged__layout">
      <div className="logged__layout-content">
        <div className="logged__layout-left-menu">
          <LeftMenu />
        </div>

        <div className="logged__layout-children-content">
          <div className="logged__layout-top-bar">
            <p>TOP BAR</p>
          </div>
          <div>{children}</div>
        </div>
      </div>
      <div className="logged__layout-footer">
        <p>FOOTER</p>
      </div>
    </div>
  );
};
