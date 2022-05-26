import React from "react";
import { toast } from "react-toastify";

const AddReview = () => {
  const Handlereview = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    const rating = event.target.rating.value;

    const totalInfo = { rating, comment };
    fetch("https://dry-ravine-60510.herokuapp.com/review", {
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
    <div className="w-1/2 mx-auto">
      <form action="" onSubmit={Handlereview}>
        <div class="form-control">
          <textarea
            name="comment"
            type="text"
            placeholder="comment"
            class="input input-bordered"
          />

          <input
            name="rating"
            type="number"
            placeholder="add rating into 5"
            maxlength="5"
            class="input input-bordered"
          />
        </div>

        <div class="form-control mt-6">
          <button class="btn btn-primary">Add info</button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
