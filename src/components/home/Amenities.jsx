import React from "react";
import { TiLeaf } from "react-icons/ti";

const projectData = [
  "Entrance Gate with Security Cabin",
  "Modern Clubhouse",
  "Multipurpose Hall with Viewing Deck",
  "Cafe Satva",
  "Amphitheatre",
  "Palm Forest Elevated Board Walk",
  "Indoor Games Room",
  "Reception with Lounge in Clubhouse",
  "Society Office Cabin",
  "Swimming Pool with Hill Views",
  "Gazebos",
  "Children's Play Area",
  "Walking Pathways & Garden",
  "Street Lights",
  "Project Compound Walls",
  "Common Water Storage Tank",
  "Concrete Internal Roads",
  "Concrete Approach Road",
  "Tree Plantation Across Projects",
  "Roadside Tree Plantation",
  "Transformer with HT & LT Cable Network",
  "Multipurpose Sports Arena",
  "Stream Beautification",
];

const plotsData = [
  "Individually Demarcated Plots",
  "Water Connection to Each Plot",
  "Provision for Elecrtical Connection Near Each plot",
  "FSI Upto 1.4",
];

const Amenities = () => {
  return (
    <div className="md:p-36 p-7 py-20 bg-[#eae5df]">
      <p className="text-[40px] font-[500] mb-16  text-center  leading-[43px] text-logoColor">
        Elevated Essentials
      </p>

      <div>
        <p className="border-logoColor border-b text-[26px] font-[600] leading-[39px] pb-3">
          Provisions (Entire Project)
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-3 mt-5">
          {projectData.map((value) => {
            return (
              <div className="flex md:items-center flex-col md:flex-row justify-start gap-2">
                <TiLeaf className="rounded-full bg-logoColor text-lg p-1 md:text-3xl md:p-2 text-white" />
                <p className="text-sm roboto-text">{value}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <p className="border-logoColor border-b text-[26px] font-[600] leading-[39px] pb-3">
          Provisions (Entire Plots)
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-3 mt-5">
          {plotsData.map((value) => {
            return (
              <div className="flex md:items-center flex-col md:flex-row justify-start gap-2">
                <TiLeaf className="rounded-full bg-logoColor text-lg p-1 md:text-3xl md:p-2 text-white" />
                <p className="text-sm roboto-text">{value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
