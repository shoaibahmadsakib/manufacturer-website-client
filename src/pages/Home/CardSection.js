import React from "react";
import { Link } from "react-router-dom";

const CardSection = ({data}) => {
  const {name,price,describtion,picture,minimunOrder,quentity,_id} = data;
  return (
      
    <div class="card  bg-base-100 shadow-xl">
       
      <figure>
        <img
          src={picture}
          alt="tools"
          className="h-72"
        />
      </figure>
      <div class="card-body text-left">
        <h2 class="card-title">
          {name}
         
        </h2>
        <p>{describtion?.slice(0, 50).concat("...")}</p>
        <div class="card-actions justify-start">
          <div class="badge badge-outline">Total Piece: {quentity}</div>
          <div class="badge badge-outline"> minimum order:{minimunOrder}</div>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-primary"><Link to={`/placeorder/${_id}`}>place order</Link></button>
        </div>
      </div>
    </div>
  );
};

export default CardSection;


