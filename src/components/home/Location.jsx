import LocationMap from "../../assets/img/location-map.webp";

const Location = () => {
  return (
    <div className="md:p-36 md:py-20 py-5">
      <div>
        <p className="text-[40px] font-[500]  text-center  leading-[43px] text-logoColor">
          Location Map
        </p>
      </div>
      <div className="py-10">
        <img src={LocationMap} alt="..." />
      </div>
    </div>
  );
};

export default Location;
