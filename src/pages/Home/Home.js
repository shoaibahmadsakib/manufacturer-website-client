import React from "react";
import BusinessSummery from "./BusinessSummery";
import CardCompo from "./CardCompo";
import CardSection from "./CardSection";
import HeroSection from "./HeroSection";
import Review from "./Review";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className=" mx-20">
        <CardCompo />
        <BusinessSummery />
        <Review />
      </div>
    </>
  );
};

export default Home;
