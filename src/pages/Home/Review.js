import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Rating from "react-rating";
import auth from "../../firebase.init";
const Review = () => {
  const [user] = useAuthState(auth)
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/review`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="py-10">
      <h2 className="text-center text-4xl font-bold uppercase py-10">Review</h2>
      <div className="grid grid-cols-3 gap-10 my_review">
        {review?.map((reviews) => (
          <div class="card bg-base-100 shadow-xl">
            <div class="avatar justify-center p-10">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL || "https://api.lorem.space/image/face?hash=3174"} />
              </div>
            </div>
            <div class="card-body">
              <h2 class="card-title">{user?.displayName}</h2>
              <p>{reviews.comment}</p>
              <div class="card-actions justify-end"></div>

              <Rating
              initialRating={0}
              placeholderRating={reviews.rating}
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                className="disabled:"
              />
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
