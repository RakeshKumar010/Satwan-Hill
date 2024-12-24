import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { TbMessage2Check } from "react-icons/tb";
import { VscCloudDownload } from "react-icons/vsc";

const Video = () => {
  return (
    <div className="  py-16  ">
      <iframe
        src="https://www.youtube.com/embed/WJBYPgk5pIw?si=4DvSPSNaU5E5NB6u"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="w-full  h-52 md:h-[110vh] mt-5"
      ></iframe>
      <div className="flex flex-wrap items-center p-2 justify-center gap-2 md:gap-40 md:h-72 bg-logoColor">
        <div className="flex gap-2 w-72 items-center justify-center text-[18px] leading-[27px] font-[500] text-logoColor px-7 py-2 bg-white rounded-full">
          <VscCloudDownload />
          <p>Download Brochure</p>
        </div>
        <div className="flex w-72 items-center justify-center text-[18px] leading-[27px] font-[500] text-logoColor px-7 py-2 bg-white rounded-full">
          <TbMessage2Check />
          <p>Enquire Now</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
