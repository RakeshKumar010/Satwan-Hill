import React from "react";
import Navbar from "../components/global/Navbar";
import Header from "../components/Header";
import Township from "../components/home/Township";
import Amenities from "../components/home/Amenities";
import Location from "../components/home/Location";
import Footer from "../components/Footer";
import Video from "../components/home/Video";
import Rera from "../components/home/Rera";
import AboutSec from "../components/home/AboutSec";
import Highlights from "../components/home/Highlights";
import Whatmakes from "../components/home/Whatmakes";
import WhatmakesImg from "../assets/img/what-makes.webp";

const jsonData = [
  "Strategic Location",
  " Superior Infrastructure",
  "40+ Enriching Amenities",
  "50% Open Green Spaces",
];
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutSec />
      <Highlights />
      <Amenities />
      <Whatmakes
        WhatmakesImg={WhatmakesImg}
        title={"What makes Satvam Hills your ideal weekend home?"}
        jsonData={jsonData}
      />
      <Video />
      <Location />
      <Rera />
      <Footer />
    </div>
  );
};

export default Home;
