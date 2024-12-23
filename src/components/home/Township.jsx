import TownIcon1 from "../../assets/img/red-circle.png";
import TownIcon2 from "../../assets/img/yellow-circle.png";
import TownIcon3 from "../../assets/img/green-circle.png";
import TownIcon4 from "../../assets/img/blue-circle.png";
import Townshipimg from "../../assets/img/townshipimg.png";
const Township = () => {
  return (
    <div className="bg-bgColor p-20 pb-64">
      <div className="flex 2xl:px-24 justify-between ">
        <div className="relative border-l border-[#c12317] w-[210px]  pl-5">
          <img
            alt="circle"
            className="absolute -top-7 -left-7 -z-0 w-20"
            src={TownIcon1}
          />
          <p className="text-[23px] leading-[27.5px]  uppercase relative z-10">
            Township with 360 degree approach
          </p>
        </div>
        <div className="relative border-l border-[#dcae1b] w-[210px]  pl-5">
          <img
            alt="circle"
            className="absolute -top-7 -left-7 -z-0 w-20"
            src={TownIcon2}
          />
          <p className="text-[23px] leading-[27.5px]  uppercase relative z-10">
            Club House spread across 2 Acres{" "}
            <span className="text-[15px] block leading-[18px] capitalize ">
              (Approx. 8093.71* SQ. MTR.)
            </span>
          </p>
        </div>
        <div className="relative border-l border-[#1a9133] w-[210px]  pl-5">
          <img
            alt="circle"
            className="absolute -top-7 -left-7 -z-0 w-20"
            src={TownIcon3}
          />
          <p className="text-[23px] leading-[27.5px]  uppercase relative z-10">
            52 acre{" "}
            <span className="text-[15px] block leading-[18px] capitalize ">
              {" "}
              (210437* sq. mtr.)
            </span>{" "}
            of Open & Green Area
          </p>
        </div>
        <div className="relative border-l border-[#33b2d2] w-[210px]  pl-5">
          <img
            alt="circle"
            className="absolute -top-7 -left-7 -z-0 w-20"
            src={TownIcon4}
          />
          <p className="text-[23px] leading-[27.5px]  uppercase relative z-10">
            Strategically located on NH-8
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center mx-auto  mt-36">
          <div className="relative">
            <p className="text-[45px]  uppercase  leading-[54px]">
              A township <br /> built for every purpose
            </p>
            <img src={Townshipimg} alt="" />

            <div
              className="bg-[#1a9133]/50 text-4xl text-center flex flex-col items-center
             justify-center text-[30px] w-[550px] h-[550px] text-white rounded-full absolute
              right-0 -bottom-60 z-10 p-16"
            >
              <p className="text-[80px] leading-[96px] uppercase">129 Acre</p>
              <p className="font-[700] uppercase">(522044* sq. mtr.)</p> Gated
              Township <br /> With Tranquil Greenery & <br /> Exclusive
              Clubhouse
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Township;
