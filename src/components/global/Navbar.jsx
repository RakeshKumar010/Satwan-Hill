import { MdOutlineMenu } from "react-icons/md";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigater = useNavigate();
  return (
    <div className="flex items-center   p-2 md:b-1   z-20 bg-white   border-2 px-6 md:px-16 2xl:px-44 justify-between">
      <img
        onClick={() => {
          navigater("/");
        }}
        src={Logo}
        alt="..."
        className=" w-20  "
      />
      <div></div>

      <div className="lg:flex hidden text-[20px] font-semibold  leading-[30px] text-logoColor   items-center gap-10 justify-center  ">
        <Link to={"/about"}>About Us</Link>
        <span>Location</span>
        <span>Lifestyle</span>
        <span>NRI Assist</span>
        <span>Contact</span>
      </div>
      <MdOutlineMenu className="p-2 rounded-sm lg:hidden block  text-[40px] md:text-4xl bg-logoColor text-white" />
    </div>
  );
};

export default Navbar;
