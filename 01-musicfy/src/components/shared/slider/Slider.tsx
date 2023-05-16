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
import { IAlbum, ISongWithImage } from "@/interfaces";

interface Props {
  data: IAlbum[] | ISongWithImage[];
  basepath?: string;
  song?: boolean;
}

export const Slider: React.FC<Props> = ({ data, basepath, song = false }) => {
  return (
    <Slick {...settings} className="slider">
      {data.map((item) => {
        if (song) {
          return (
            <div
              key={item.id}
              className="slider__item"
              onClick={() => console.log("click en la cancion")}
            >
              <div className="slider__item-block-play">
                <Image src={item.image} alt={item.name} />
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
          >
            <Image src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </Link>
        );
      })}
    </Slick>
  );
};
