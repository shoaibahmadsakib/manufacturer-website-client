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
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
