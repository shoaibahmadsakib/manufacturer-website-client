import React, { useEffect, useState } from 'react'

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      const url = `http://localhost:5000/order`;
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
            setOrders(data);
        });
    }, []);
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>count</th>
            <th>email</th>
            <th>Name</th>
            <th>Number</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
        {
            orders.map((order,index)=>(
                <tr>
                <th>{index+1}</th>
                <td>{order.email}</td>
                <td>{order.name}</td>
                <td>{order.number }</td>
                <td>{order.quantity }</td>
                
              </tr>
            ))
        }
        </tbody>
      </table>
    </div>
  )
}

export default ManageOrder