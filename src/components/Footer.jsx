import Logo from "../assets/logo.png";
import Symphony from "../assets/img/symphony.webp";
import Pioneer from "../assets/img/pioneer.webp";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center flex-col bg-[#eae5df] roboto-text">
      <p className="text-[18px] font-semibold roboto-text text-logoColor text-center leading-[65px]">
        A Project By
      </p>
      <img src={Logo} alt="..." className="w-32" />
      <div className="border  w-full h-full  py-10">
        <p className="text-[18px] font-semibold  roboto-text text-logoColor text-center leading-[65px]">
          In Association With
        </p>
        <div className="flex items-center justify-center gap-20">
          <img src={Symphony} alt="symphony" />
          <img src={Pioneer} alt="pioneer" />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 py-10 justify-center md:justify-between p-7 md:px-32 w-full">
        <img src={Logo} alt="" className="w-32" />
        <div className="flex flex-wrap items-start gap-4 md:gap-10">
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
      <div className="  md:px-32  w-full">
        <div className="flex flex-wrap gap-4 border-t border-gray-300 w-full  items-center justify-center md:justify-between py-2">
          <p className="text-[12px] leading-[18px]">
            © 2024 Satvam Hills. All Rights Reserved
          </p>
          <p className="text-[12px] leading-[18px]">
            Designed & Developed By Wisecow Consultants
          </p>
          <p className="text-[12px] leading-[18px]">
            Disclaimer | Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
