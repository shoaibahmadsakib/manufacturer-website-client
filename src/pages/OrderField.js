import React from "react";

const OrderField = ({total}) => {
  const placeOrderClick = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const number = event.target.number.value;
    const quantity = event.target.quantity.value;
    if(quantity >5 && quantity<total){
        console.log(email,name,number,quantity);
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
            placeholder="email"
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
