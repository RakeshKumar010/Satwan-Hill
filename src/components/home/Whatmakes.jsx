import { TiLeaf } from "react-icons/ti";


const Whatmakes = ({ title, jsonData ,WhatmakesImg}) => {
  return (
    <div className="md:grid flex flex-col-reverse grid-cols-2 bg-logoColor">
      <div>
        <img src={WhatmakesImg} alt="..." className="w-full h-full" />
      </div>
      <div className="md:p-32 py-10 text-white">
        <p className="md:text-[40px] text-[32px] md:leading-[62px] leading-[44px] md:text-start text-center md:p-0 p-5  font-[500]  ">
          {title}
        </p>
        <div className="flex flex-col gap-5 mt-10 ">
          {jsonData.map((value) => {
            return (
              <p className="flex md:flex-row flex-col items-center justify-center text-center md:justify-start gap-1   text-[24px] leading-[40px]">
                <TiLeaf />
                {value}
              </p>
            );
          })}

         
        </div>
      </div>
    </div>
  );
};

export default Whatmakes;
