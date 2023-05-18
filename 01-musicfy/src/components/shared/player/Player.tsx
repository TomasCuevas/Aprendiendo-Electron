import ReactPlayer from "react-player";
import { Icon, Progress } from "semantic-ui-react";

//* styles *//
import "./player.scss";

//* store *//
import { usePlayerStore } from "@/store";

export const Player: React.FC = () => {
  const { song, playing, pause, resume, volume } = usePlayerStore();

  return (
    <div className="player">
      <Icon
        onClick={playing ? pause : resume}
        name={playing ? "pause circle outline" : "play circle outline"}
      />
      <Progress progress="value" value={30} total={100} size="tiny" />
      <ReactPlayer
        url={song?.file}
        playing={playing}
        volume={volume}
        height={0}
        width={0}
      />
    </div>
  );
};
