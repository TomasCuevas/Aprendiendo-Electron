//* styles *//
import { Icon, Progress } from "semantic-ui-react";
import "./player.scss";

export const Player: React.FC = () => {
  const playing = true;

  return (
    <div className="player">
      <Icon name={playing ? "pause circle outline" : "play circle outline"} />
      <Progress progress="value" value={30} total={100} size="tiny" />
    </div>
  );
};
