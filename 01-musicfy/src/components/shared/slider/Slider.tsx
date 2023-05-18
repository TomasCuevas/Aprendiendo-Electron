import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slick from "react-slick";
import { Icon, Image } from "semantic-ui-react";

//* slider config *//
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 500,
  swipeToSlide: true,
  centerMode: true,
  adaptiveHeight: true,
};

//* styles *//
import "./slider.scss";

//* store *//
import { usePlayerStore } from "@/store";

//* interfaces *//
import { IAlbum, IArtist, ISongWithImage } from "@/interfaces";

interface Props {
  data: IAlbum[] | ISongWithImage[] | IArtist[];
  basepath?: string;
  song?: boolean;
}

export const Slider: React.FC<Props> = ({ data, basepath, song = false }) => {
  const [size, setSize] = useState(0);
  const [isLoad, setIsLoad] = useState(false);
  const itemRef = useRef<any>(null);

  const { playSong } = usePlayerStore();

  useEffect(() => {
    if (itemRef.current) {
      setSize(itemRef.current.clientWidth);
    }
  }, [isLoad]);

  return (
    <Slick {...settings} className="slider">
      {data.map((item) => {
        if (song) {
          return (
            <div
              key={item.id}
              className="slider__item"
              onClick={() => playSong(item as ISongWithImage)}
              onLoad={() => setIsLoad(true)}
              ref={itemRef}
            >
              <div className="slider__item-block-play">
                <Image
                  src={item.image}
                  alt={item.name}
                  style={{ height: size }}
                />
                <Icon name="play circle outline" />
              </div>
              <h3>{item.name}</h3>
            </div>
          );
        }

        return (
          <Link
            to={`/${basepath}/${item.id}`}
            key={item.id}
            className="slider__item"
            onLoad={() => setIsLoad(true)}
            ref={itemRef}
          >
            <Image src={item.image} alt={item.name} style={{ height: size }} />
            <h3>{item.name}</h3>
          </Link>
        );
      })}
    </Slick>
  );
};
