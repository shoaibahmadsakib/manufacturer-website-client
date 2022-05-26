import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import ProfileInfo from "./ProfileInfo";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const placeOrderClick = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const address = event.target.address.value;
    const productName = event.target.name.value;

    const totalInfo = { email, productName, address };
    fetch("http://localhost:5000/profile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(totalInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
         
          toast("success");
        } else {
          toast.error("failed");
        }
      });
  };
  return (
    <div>
      {/* <h2>{user?.displayName}</h2>
      <p>{user?.email}</p> */}
      <ProfileInfo />
      <div>
        <form action="" onSubmit={placeOrderClick}>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              name="email"
              type="text"
              disabled
              value={user?.email || ""}
              placeholder="email"
              class="input input-bordered"
            />
            <label class="label">
              <span class="label-text">address</span>
            </label>
            <input
              name="address"
              type="text"
              placeholder="address"
              class="input input-bordered"
            />
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              class="input input-bordered"
            />
          </div>

          <div class="form-control mt-6">
            <button class="btn btn-primary">Add info</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
