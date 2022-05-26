import React from "react";

const BusinessSummery = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold uppercase py-10">
        Business Summery
      </h2>
      <div className="grid grid-cols-4 gap-7 my_summery">
        <div class="card shadow-md text-neutral-content">
          <div class="card-body items-center text-center text-black">
            <h2 class="card-title text-blue-400">
              <i class="fa-solid fa-flag text-5xl"></i>
            </h2>
            <h1 className="text-center font-bold text-4xl ">90</h1>
            <p>We are 90+ happy countries</p>
          </div>
        </div>
        <div class="card  shadow-md text-neutral-content">
          <div class="card-body items-center text-center text-black">
            <h2 class="card-title text-blue-400">
              <i class="fa-solid fa-people-carry-box text-5xl"></i>
            </h2>
            <h1 className="text-center font-bold text-4xl ">1200</h1>
            <p>We are 1200+ Complete project</p>
          </div>
        </div>
        <div class="card shadow-md text-neutral-content">
          <div class="card-body items-center text-center text-black">
            <h2 class="card-title text-blue-400">
              <i class="fa-solid fa-hands-holding-circle text-5xl"></i>
            </h2>
            <h1 className="text-center font-bold text-4xl ">2000</h1>
            <p>We are 2000+ happy client</p>
          </div>
        </div>
        <div class="card  shadow-md text-neutral-content">
          <div class="card-body items-center text-center text-black">
            <h2 class="card-title text-blue-400">
              <i class="fa-solid fa-magnifying-glass-dollar text-5xl"></i>
            </h2>
            <h1 className="text-center font-bold text-4xl ">1190</h1>
            <p>We are 1190+ happy review</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
