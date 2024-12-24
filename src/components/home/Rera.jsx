import Qr1 from "../../assets/qr/qr1.webp";
import Bgimg from "../../assets/img/bg-tree.webp";

const Rera = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Bgimg})`,backgroundRepeat:'no-repeat', filter: 'grayscale(1)' }}
      className="md:h-[90vh]  min-h-screen relative text-white "
    >
      <div className="absolute bottom-16 left-0 right-0 py-10">
        <p className="text-center   font-[500] mb-16 text-[32px]">
          PMRDA Sanctioned | RERA-Registered | NA Plots
        </p>
        <div className="grid   grid-cols-2 gap-5 sm:grid-cols-5 md:px-52 ">
          <div className="flex flex-col justify-center gap-2 items-center  text-center ">
            <img src={Qr1} alt="..." />
            <p className="roboto-text text-[15px] font-[300] leading-[24px]">
              Daffodils is registered under RERA - P52100049284
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center  text-center ">
            <img src={Qr1} alt="..." />
            <p className="roboto-text text-[15px] font-[300] leading-[24px]">
              Satvam Hills A4 is registered under RERA - P52100052106
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center  text-center ">
            <img src={Qr1} alt="..." />
            <p className="roboto-text text-[15px] font-[300] leading-[24px]">
              Satvam Hills A5 is registered under RERA - P52100052048
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center  text-center ">
            <img src={Qr1} alt="..." />
            <p className="roboto-text text-[15px] font-[300] leading-[24px]">
              Satvam Hills A6 is registered under RERA - P52100054456
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center  text-center ">
            <img src={Qr1} alt="..." />
            <p className="roboto-text text-[15px] font-[300] leading-[24px]">
              Satvam Hills B7 is registered under RERA - P52100053964
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rera;
