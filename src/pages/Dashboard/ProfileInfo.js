import React, { useEffect, useState } from "react";

const ProfileInfo = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(`https://dry-ravine-60510.herokuapp.com/profile`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div>
      <h1>ki ja kobo</h1>
      {info.map((p) => (
        <>
        <p>{p._id}</p>
          <p>{p.productName}</p>
          <p>{p.address}</p>
         
        </>
      ))}
      
    </div>
  );
};

export default ProfileInfo;
