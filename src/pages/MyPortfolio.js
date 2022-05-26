import React, { useEffect, useState } from "react";

const MyPortfolio = () => {
    const [myData,setMydata] = useState([])
  useEffect(() => {
    fetch("https://dry-ravine-60510.herokuapp.com/biodata")
      .then((res) => res.json())
      .then((data) => setMydata(data));
     
  }, []);
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
       {
           myData.map((data)=>(
            <div class="max-w-md">
            <h1 class="text-4xl font-bold"> NAME: {data.name}</h1>
            <p class="py-6">Education: {data.education}</p>
            <p class="py-6">Email: {data.email}</p>
            <p class="py-6">{data.Biodata}</p>
           
            <div className="grid grid-cols-2 gap-10">
              <div >
                <img src={data.image} alt="" />
              </div>
              <div>
                <ul class="menu bg-base-100 w-56 p-2 rounded-box">
                    <b>My some Skill</b>
                  <li>
                    <a>{data.Skill[0]}</a>
                  </li>
                  <li>
                    <a>{data.Skill[1]}</a>
                  </li>
                  <li>
                    <a>{data.Skill[2]}</a>
                  </li>
  
                  <li>
                    <a>{data.Skill[3]}</a>
                  </li>
                  <li>
                    <a>{data.Skill[4]}</a>
                  </li>
                  <li>
                    <a>{data.Skill[5]}</a>
                  </li>
                </ul>
              </div>
            </div>
  
            <h1 className="text-3xl font-bold py-10">My some work list</h1>
            <div className="flex gap-8 text-blue-600">

          <a href="https://cosmic-malabi-bb910e.netlify.app/">CAR REVIEW</a>
          <a href="https://legendary-torrone-9cf3c3.netlify.app/">Insta-Sohor</a>
          <a href="https://hungry-varahamihira-18aad7.netlify.app/">Insta-Sohor</a>
          <a href="https://mystifying-shirley-5c7ac2.netlify.app/">Phone Bazar</a>
            </div>
          </div>
           ))
       }
      </div>
    </div>
  );
};

export default MyPortfolio;
