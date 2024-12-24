import React, { useRef } from "react";
import Slider from "react-slick";
import GalleryImg1 from "../assets/banner/img1.webp";
import GalleryImg2 from "../assets/banner/img2.webp";
import GalleryImg3 from "../assets/banner/img3.webp"; 
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
const sliderImgData = [GalleryImg1, GalleryImg2, GalleryImg3];
const Header = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="overflow-hidden relative">
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
            className="w-full lg:h-screen h-[60vh]"
            key={`duplicate-${index}`}
          />
        ))}
      </Slider>
      <div className="absolute  flex inset-0   justify-between items-center  ">
        <button className="button  " onClick={previous}>
          <MdArrowBackIos className=" md:w-[70px]  md:h-[70px] md:p-5 p-3   rounded-full text-gray-100" />
        </button>
        <button className="button  " onClick={next}>
          <MdArrowForwardIos className=" md:w-[70px]  md:h-[70px] md:p-5 p-3  rounded-full text-gray-100" />
        </button>
      </div>
    </div>
  );
};

export default Header;
