import { Link } from "react-router-dom";
import Slick from "react-slick";
import { Image } from "semantic-ui-react";

//* slider config *//
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 500,
  swipeToSlide: true,
  centerMode: true,
};

//* styles *//
import "./slider.scss";

//* interface *//
interface Props {
  data: any[];
  basepath: string;
}

export const Slider: React.FC<Props> = ({ data, basepath }) => {
  return (
    <Slick {...settings} className="slider">
      {data.map((item) => (
        <Link
          to={`/${basepath}/${item.id}`}
          key={item.id}
          className="slider__item"
        >
          <Image src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
        </Link>
      ))}
    </Slick>
  );
};
