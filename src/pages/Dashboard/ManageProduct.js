import React, { useEffect, useState } from "react";

const ManageProduct = () => {
  const [myTools, setMyTools] = useState([]);
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  useEffect(() => {
    const url = `http://localhost:5000/tools`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyTools(data);
      });
  }, []);

  const handleDelete = (id) => {
   
    const confirmDelete = window.confirm("are you sure to delete it?");
    if (confirmDelete) {
      const url = `http://localhost:5000/tools/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
         
          const remaining = myTools.filter((service) => service._id !== id);
          setMyTools(remaining);
        });
    }
  };
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>count</th>
            <th>Name</th>
            <th>price</th>
            <th>quantity</th>
            <th>image</th>
            <th>X</th>
          </tr>
        </thead>
        <tbody>
          {myTools.map((tools, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{tools.name}</td>
              <td>{tools.price}</td>
              <td>{tools.quantity}</td>
              <td>
                <img src={tools.picture} alt="" height="30px" width="30px" />
              </td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => handleDelete(tools._id)}
                  for="delete-confirm-modal"
                >
                  Delete
                </button>
              </td>

             
             
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
