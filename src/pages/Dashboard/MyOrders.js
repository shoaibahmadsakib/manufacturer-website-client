import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../components/Loading";
const MyOrders = () => {
  const [myOrder, setMyorder] = useState([]);
  const [user, loading] = useAuthState(auth);
  
  useEffect(() => {
    const url = `https://dry-ravine-60510.herokuapp.com/order`;
    fetch(url,{
      method: 'GET',
      headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (loading) {
          return <Loading></Loading>;
        }
        const remaining = data.filter(
          (service) => service?.email === user?.email
        );
       

        setMyorder(remaining);
      });
  }, [user]);
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Quentity</th>
          </tr>
        </thead>
        <tbody>
          {myOrder?.map((orders, index) => {
            const { productName, email, number, quantity } = orders;
            return (
              <tr key={index}>
                <td>{productName}</td>
                <td>{email}</td>
                <td>{number}</td>
                <td>{quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
