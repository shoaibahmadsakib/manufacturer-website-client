import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";
const OrderField = ({ total,productName }) => {
  const [user] = useAuthState(auth);


  const placeOrderClick = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const productName = event.target.name.value;
    const number = event.target.number.value;
    const quantity = event.target.quantity.value;
    if (quantity > 5 && quantity < total) {
      const totalInfo = { email, productName, number, quantity };
      fetch("https://dry-ravine-60510.herokuapp.com/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify( totalInfo ),
      })
        .then((res) => res.json())
        .then(data => {
          if(data.success){
           
              toast("success")
          }
          else{
              toast.error("failed")
          }
        
      });
    }
  };
  return (
    <div class="card-body">
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
            <span class="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            value={productName}
            placeholder="name"
            class="input input-bordered"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Phone number</span>
          </label>
          <input
            name="number"
            type="number"
            placeholder="number"
            class="input input-bordered"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Quantity</span>
          </label>
          <input
            name="quantity"
            type="number"
            placeholder="number"
            class="input input-bordered"
          />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Place order Here</button>
        </div>
      </form>
    </div>
  );
};

export default OrderField;
