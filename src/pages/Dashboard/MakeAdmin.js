import React, { useEffect, useState } from "react";

const MakeAdmin = () => {
  const [allAdmin, setAlladmin] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/user`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
       
        const remaining = data.filter((service) => service?.role === "admin");

        setAlladmin(remaining);
      });
  },[]);
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>count</th>
            <th>email</th>
            <th>role</th>
          </tr>
        </thead>
        <tbody>
          {allAdmin.map((admin, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{admin.email}</td>
              <td>{admin.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
