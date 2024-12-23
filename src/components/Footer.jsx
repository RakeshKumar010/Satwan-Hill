import Logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram, 
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center py-10 justify-between px-32">
      <img src={Logo} alt="" />
      <div className="flex items-start gap-10">
        <div className="flex flex-col justify-start gap-4">
          <div className="w-56">
            <p className="text-[18px] font-semibold leading-[18px] text-logoColor ">
              Office Address
            </p>
            <p>
              Synergy Properties, Lokmanyanagar, Sadashiv Peth, Pune – 411030
            </p>
          </div>
          <div className="w-56">
            <p className="text-[18px] font-semibold leading-[18px] text-logoColor ">
              Contact No.
            </p>
            <p>+91 020 24339205</p>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-4">
          <div className="w-56">
            <p className="text-[18px] font-semibold leading-[18px] text-logoColor ">
              Site Address
            </p>
            <p>Satvam Hills, Jamgaon Village, near Paud, Mulshi, Pune.</p>
          </div>
          <div className="w-56">
            <p className="text-[18px] font-semibold leading-[18px] text-logoColor ">
              Contact No.
            </p>
            <p>+91 89997 10148</p>
          </div>
          <div className="w-56">
            <p className="text-[18px] font-semibold leading-[18px] text-logoColor ">
              Email
            </p>
            <p>sales@synergyproperties.in</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <FaFacebookF className="bg-logoColor text-white p-2 w-8 h-8" />
        <FaLinkedinIn className="bg-logoColor text-white p-2 w-8 h-8" />
        <FaInstagram className="bg-logoColor text-white p-2 w-8 h-8" />
        <FaYoutube className="bg-logoColor text-white p-2 w-8 h-8" />
      </div>
    </div>
  );
};

export default Footer;
