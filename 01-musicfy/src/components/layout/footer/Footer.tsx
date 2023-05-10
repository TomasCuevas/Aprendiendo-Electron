import { Icon, Image, Input } from "semantic-ui-react";

//* component *//
import { Player } from "@/components/shared";

//* styles *//
import "./footer.scss";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <Image src={null} />
        <span>SONG NAME</span>
      </div>

      <div className="footer__center">
        <Player />
      </div>

      <div className="footer__right">
        <Input
          label={<Icon name="volume up" />}
          type="range"
          min={0}
          max={1}
          step={0.01}
        />
      </div>
    </div>
  );
};