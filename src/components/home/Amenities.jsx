import Amenities1 from "../../assets/amenities/img1.png";
import Amenities2 from "../../assets/amenities/img2.png";
import Amenities3 from "../../assets/amenities/img3.png";
import Amenities4 from "../../assets/amenities/img4.png";
import Amenities5 from "../../assets/amenities/img5.png";
import Amenities6 from "../../assets/amenities/img6.png";
import Amenities7 from "../../assets/amenities/img7.png";
import Amenities8 from "../../assets/amenities/img8.png";
import Amenities9 from "../../assets/amenities/img9.png";
import Amenities10 from "../../assets/amenities/img10.png";

const Amenities = () => {
  const amenities = [
    {
      text: "Gymnasium",
      icon: Amenities1,
    },
    {
      text: "Indoor Games",
      icon: Amenities2,
    },
    {
      text: "Multi-Purpose Hall",
      icon: Amenities3,
    },
    {
      text: "Fine Dining",
      icon: Amenities4,
    },
    {
      text: "Doctor's Room",
      icon: Amenities5,
    },
    {
      text: "Kid's Indoor Play Area",
      icon: Amenities6,
    },
    {
      text: "Spa",
      icon: Amenities7,
    },
    {
      text: "Billiards",
      icon: Amenities8,
    },
    {
      text: "Swimming Pool",
      icon: Amenities9,
    },
    {
      text: "Kid's Play Area",
      icon: Amenities10,
    },
  ];
  return (
    <div className="p-36 py-16 bg-bgColor">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[45px]  uppercase  leading-[54px]">
            World Class Amenities
          </p>
          <p>Explore the finest amenities around you</p>
        </div>
        <button className="bg-[#28251e] px-10 p-1 rounded-full text-white">
          BOOK NOW
        </button>
      </div>
      <div className="grid grid-cols-5 gap-10 py-5">
        {amenities.map(({ text, icon }) => {
          return (
            <div className="text-center flex items-center justify-center flex-col">
              <img src={icon} alt="" className="rounded-full" />
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
