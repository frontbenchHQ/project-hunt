import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ImgSlider = ({ imgData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      {imgData.map((item, index) => (
        <div key={index}>
          <img
            src={item.url}
            alt="working"
            style={{ width: "100%", height: "300px" }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImgSlider;
