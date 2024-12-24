import React from "react";
import Footer from "../components/Footer";
import Rera from "../components/home/Rera";
import Header from "../components/about/Header";
import Navbar from "../components/global/Navbar";
import Whatmakes from "../components/home/Whatmakes";
import WhatmakesImg from "../assets/img/About-Page.webp";

const jsonData = [
  "Macro & Micro Planning ",
  "Innovative & Durable Construction",
  "Best Value for Investment",
  "Sustainable Living",
];

const About = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Whatmakes
        title={"Values We Live By"}
        jsonData={jsonData}
        WhatmakesImg={WhatmakesImg}
      />
      <Rera />
      <Footer />
    </div>
  );
};

export default About;
