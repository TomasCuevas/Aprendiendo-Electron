import { useState } from "react";
import ReactPlayer from "react-player";
import { OnProgressProps } from "react-player/base";
import { Icon, Progress } from "semantic-ui-react";

//* styles *//
import "./player.scss";

//* store *//
import { usePlayerStore } from "@/store";

export const Player: React.FC = () => {
  const { song, playing, pause, resume, volume } = usePlayerStore();
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);

  const onProgress = (data: OnProgressProps) => {
    setTotalSeconds(data.loadedSeconds);
    setCurrentSeconds(data.playedSeconds);
  };

  return (
    <div className="player">
      <Icon
        onClick={playing ? pause : resume}
        name={playing ? "pause circle outline" : "play circle outline"}
      />
      <Progress
        progress="value"
        value={currentSeconds}
        total={totalSeconds}
        size="tiny"
      />
      <ReactPlayer
        url={song?.file}
        playing={playing}
        volume={volume}
        height={0}
        width={0}
        onProgress={onProgress}
      />
    </div>
  );
};
