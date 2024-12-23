import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center fixed top-0 left-0 right-0 z-20 bg-white pt-10 border-2  px-20 2xl:px-28 justify-between">
      <img src={Logo} alt="..." className="absolute top-7 w-36 " />
      <div></div>

      <div className="flex text-lg text-logoColor font-semibold  items-center gap-10 justify-center  ">
        <span>About Us</span>
        <span>Location</span>
        <span>Lifestyle</span>
        <span>NRI Assist</span>
        <span>Contact</span>
      </div>

      <button className="bg-logoColor mb-2 text-white rounded-full p-2 px-6">
        Enquire Now
      </button>
    </div>
  );
};

export default Navbar;
