import React from "react";
import Navbar from "../components/global/Navbar";
import Header from "../components/Header";
import Township from "../components/home/Township";
import Amenities from "../components/home/Amenities";
import Location from "../components/home/Location";
import Footer from "../components/Footer";
import Video from "../components/home/Video";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Township />
      <Amenities />
      <Video />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;
