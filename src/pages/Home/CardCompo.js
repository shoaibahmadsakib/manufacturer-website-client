import React, { useEffect, useState } from "react";
import CardSection from "./CardSection";

const CardCompo = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/tools";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <>
      <h2 className="text-center text-4xl font-bold uppercase py-10 ">Tools</h2>
      <div className="grid grid-cols-3 justify-items-center py-10 gap-8 tool_design">
        {tools.slice(0,6).map((tool,index) => (
          <CardSection key={index} data={tool} />
        ))}
      </div>
    </>
  );
};

export default CardCompo;
