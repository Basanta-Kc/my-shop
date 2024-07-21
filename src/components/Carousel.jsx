import Carousel from "react-material-ui-carousel";
import Banner1 from "../assets/banner-1.jpg";

export default function CarouselBanner() {
  return (
    <Carousel>
      <img src={Banner1} />
      <img src={Banner1} />
      <img src={Banner1} />
    </Carousel>
  );
}
