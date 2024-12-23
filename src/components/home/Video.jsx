import React from "react";

const Video = () => {
  return (
    <div className="p-36 py-16 bg-bgColor">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[45px]  uppercase  leading-[54px]">
            Township Walkthrough
          </p>
          <p>Explore the Township </p>
        </div>
      </div>
      <iframe
        src="https://www.youtube.com/embed/WJBYPgk5pIw?si=4DvSPSNaU5E5NB6u"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="w-full rounded-md h-[80vh] mt-5"
      ></iframe>
    </div>
  );
};

export default Video;
