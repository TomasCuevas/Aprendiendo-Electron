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

//* interfaces *//
import { IAlbum, IArtist, ISongWithImage } from "@/interfaces";
import { useEffect, useRef, useState } from "react";

interface Props {
  data: IAlbum[] | ISongWithImage[] | IArtist[];
  basepath?: string;
  song?: boolean;
}

export const Slider: React.FC<Props> = ({ data, basepath, song = false }) => {
  const [size, setSize] = useState(0);
  const itemRef = useRef<any>(null);

  useEffect(() => {
    if (itemRef.current) {
      setSize(itemRef.current.clientWidth);
    }
  }, [data]);

  return (
    <Slick {...settings} className="slider">
      {data.map((item) => {
        if (song) {
          return (
            <div
              key={item.id}
              className="slider__item"
              onClick={() => console.log("click en la cancion")}
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
