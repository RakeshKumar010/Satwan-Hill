import AboutBanner from "../../assets/img/about_banner.webp";

const Header = () => {
  return (
    <div className="relative ">
      <img src={AboutBanner} alt="..." className="md:h-auto h-[300px]" />
      <div className="flex items-center justify-center absolute top-0 bottom-0 right-0 left-0">
        <p className="md:text-[56px] text-[32px] font-[500] leading-[45px]  text-center px-7 md:leading-[70px] text-white">
          Nurturing Values for 40+ Years
        </p>
      </div>
    </div>
  );
};

export default Header;
