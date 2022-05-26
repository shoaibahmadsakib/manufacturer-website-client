import React from "react";
import BusinessSummery from "./BusinessSummery";
import CardCompo from "./CardCompo";
import CardSection from "./CardSection";
import HeroSection from "./HeroSection";
import ImageSlide from "./ImageSlide";
import OurGoal from "./OurGoal";
import Review from "./Review";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className=" mx-20 my-margin">
        <CardCompo />
        <BusinessSummery />
        <ImageSlide/>
        <OurGoal/>
        <Review />
      </div>
    </>
  );
};

export default Home;
