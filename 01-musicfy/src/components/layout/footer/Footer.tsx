import { Icon, Image, Input } from "semantic-ui-react";

//* component *//
import { Player } from "@/components/shared";

//* styles *//
import "./footer.scss";

//* store *//
import { usePlayerStore } from "@/store";

export const Footer: React.FC = () => {
  const { miniature, song } = usePlayerStore();

  return (
    <div className="footer">
      <div className="footer__left">
        {miniature && <Image src={miniature} alt="song image" />}
        {song && <span>{song.name}</span>}
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
