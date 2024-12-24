import Aboutbanner from "../../assets/img/aboutbanner.webp";
import ReraPNG from "../../assets/img/Rera-PNG.png";

const AboutSec = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#eae5df]">
      <div className="p-7 md:p-20">
        <p className="text-[40px] leading-[52px] font-[500] italic mb-10 text-logoColor ">
          Unwind Amidst <br /> Nature, Peace and Joy!
        </p>
        <p className="roboto-text">
          Unwind your weekends in a place where the honking of cars is replaced
          by the sweet songs of birds, where you find soothing greenery as far
          as the eye can see, and where every breath you take is filled with the
          freshness of nature. Welcome to Satvam Hills, your very own weekend
          home, where every moment spent is a{" "}
          <span className="text-logoColor"> celebration of life.</span>{" "}
        </p>
        <br />
        <p className="roboto-text">
          Spanning across 45 acres of lush greenery Satvam Hills is a premium
          gated community of nature-inspired Hillside Luxury NA Plots
          meticulously curated to offer you the best of all worlds – elevated
          lifestyle amenities, seamless conveniences and the beauty of Mother
          Earth.{" "}
        </p>
        <div className="flex md:flex-row text-center flex-col items-center gap-4 py-10">
          <img src={ReraPNG} alt="ReraPNG" className="w-16" />
          <div>
            <p className="roboto-text">PMRDA Sanctioned, MahaRERA-Registered</p>
            <p className="roboto-text">NA Plots. Satvam Hills – P52100049284</p>
          </div>
        </div>
      </div>
      <div className="p-7 md:p-0">
        <img src={Aboutbanner} alt="..." className="w-full h-full" />
      </div>
    </div>
  );
};

export default AboutSec;
