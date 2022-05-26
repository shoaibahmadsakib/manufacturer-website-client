import React from "react";
import heroPhoto from '../../assets/images/herophoto.jpg'

const HeroSection = () => {
  return (
    <div className="pb-10">
      <div
        class="hero min-h-screen"
        style={{backgroundImage:`url(${heroPhoto})`}}
        
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-2xl">
            <h1 class="mb-5 text-5xl font-bold">Welcome Our Manufacturer Company</h1>
            <p class="mb-5">
             We Supply all kinds of manufacturer product in our daily life Such that: hammer, drill machine, screwdriver, wrench, Pliers, Measuring Tape, Chisel etc. You can simple buy here
            </p>
            <button class="btn btn-primary">Click here For details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
