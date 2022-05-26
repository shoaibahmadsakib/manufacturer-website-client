import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import OrderField from "./OrderField";

const PlaceOrder = () => {
  const [info, setInfo] = useState({});
  const [user] = useAuthState(auth);

  useEffect(() => {
    const url = `http://localhost:5000/tools/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  const { id } = useParams();

  const { name, picture, price, describtion, quentity, minimunOrder } = info;

  
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <div class="text-center lg:text-left w-1/2 pr-10">
            <h1 class="text-5xl font-bold">{name}</h1>
            <p class="py-6">{describtion}</p>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <p>quantity: {quentity}</p>
                <p>minimum order: {minimunOrder}</p>
                <p>
                  <b>Price</b>: {price}
                </p>
                <label for="my-modal-3" class="btn modal-button">
                  see details
                </label>

                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal">
                  <div class="modal-box relative">
                    <label
                      for="my-modal-3"
                      class="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <h3 class="text-lg font-bold">{user.displayName}</h3>
                    <p class="py-4">email Address: {user.email}</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={picture} alt="" />
              </div>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
           <OrderField total={quentity} productName ={name}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
