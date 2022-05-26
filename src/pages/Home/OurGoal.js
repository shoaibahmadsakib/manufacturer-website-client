import React from "react";

const OurGoal = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvgP0MdlOiyCmrU-lx-7D-MD_SxdKISBXgjkLxjhYQnfuQ8gpKdQGWy5ZXZfQlCBbphB0&usqp=CAU"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">Our Main Goal</h1>
            <p class="py-6">
             Our Goal to make customer happy
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoal;
