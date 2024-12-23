import React, { useRef } from "react";
import Slider from "react-slick";
import GalleryImg1 from "../assets/banner/img1.webp";
import GalleryImg2 from "../assets/banner/img2.webp";
import GalleryImg3 from "../assets/banner/img3.webp";
const sliderImgData = [GalleryImg1, GalleryImg2, GalleryImg3];
const Header = () => {
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="overflow-hidden ">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {sliderImgData.map((value, index) => (
          <img
            src={value}
            alt={`slider-duplicate-${index}`}
            className="w-full"
            key={`duplicate-${index}`}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Header;
