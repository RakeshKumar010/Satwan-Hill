import LocationMap from "../../assets/img/location-map.webp";

const Location = () => {
  return (
    <div className="p-36 py-16 bg-bgColor">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[45px]  uppercase  leading-[54px]">Location Map</p>
          <p>Explore the Location Map</p>
        </div>
      </div>
      <div className="py-6">
        <img src={LocationMap} alt="..." />
      </div>
    </div>
  );
};

export default Location;
