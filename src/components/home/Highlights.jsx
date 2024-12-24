import Icon1 from "../../assets/img/icon1.webp";
import Icon2 from "../../assets/img/icon2.webp";
import Icon3 from "../../assets/img/icon3.webp";
import Icon4 from "../../assets/img/icon4.webp";
import Icon5 from "../../assets/img/icon5.webp";
import Icon6 from "../../assets/img/icon6.webp";
import Icon7 from "../../assets/img/icon7.webp";
const dataArray = [
  {
    feature: "Grand Entrance Gate with Manned Security Cabin",
    icon: Icon1,
  },
  {
    feature: "24*7 CCTV Surveillance and My Gate Provision",
    icon: Icon2,
  },
  {
    feature: "Wide Internal Roads with Streetlights and Avenue Trees",
    icon: Icon3,
  },
  {
    feature: "Clearly Demarcated Plots",
    icon: Icon4,
  },
  {
    feature: "Plug-n-play Infrastructure for Water and Electricity",
    icon: Icon5,
  },
  {
    feature: "External Compound Wall",
    icon: Icon6,
  },
  {
    feature: "Thoughtfully Designed Layout, Preserving Existing 2000+ Trees",
    icon: Icon7,
  },
];
const Highlights = () => {
  return (
    <div className="md:p-36 py-20">
      <div>
        <p className="text-[40px] font-[500]  text-center  leading-[43px] text-logoColor">
          Infrastructural Highlights
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-5 my-16">
        {dataArray.map(({ feature, icon }) => {
          return (
            <div className="border-2 border-gray-300 w-[160px] md:w-[270px] flex p-3 md:p-10 gap-10 text-center items-center flex-col justify-center md:h-80">
              <img
                src={icon}
                alt=""
                className="md:w-16 w-10 "
                style={{ filter: "hue-rotate(145deg)" }}
              />
              <p className="roboto-text md:text-base text-sm leading-[22px]">
                {feature}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Highlights;
