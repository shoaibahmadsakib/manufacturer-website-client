import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import ProfileInfo from "./ProfileInfo";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myPro, setMyPro] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    const url = `http://localhost:5000/profile`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyPro(data);
      });
  }, []);

  // if (isLoading || loading) {
  //   return <Loading />;
  // }
  const onSubmit = async (data) => {
    const phone = data.phone;
    const edu = data.edu;
    const city = data.city;
    const linkedin = data.linkedin;

    fetch(`http://localhost:5000/profile/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ phone, edu, city, linkedin }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("update successfully");
      });
  };

  return (
    <>
      <h4 className="text text-3xl">My Profile</h4>
      <div className="grid grid-cols-2 my_pro">
        <div className="pt-10 pl-10 text-left">
          <h4> name:{user?.displayName}</h4>
          <p>email: {user?.email}</p>

          {myPro.map((data) => (
            <>
              <p><b> phone Nmber:</b>{data.phone}</p>
              <p><b>education:</b> {data.edu}</p>
              <p><b>city:</b> {data.city}</p>
              <p>
                <a href={data.linkedin}></a> <b>linkedin:</b> {data.linkedin}
              </p>
            </>
          ))}
        </div>

        {/*  */}

        <div>
          <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="text-center text-2xl font-bold">profile</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full max-w-xs">
                    <input
                      type="number"
                      placeholder="enter your phone number"
                      className="input input-bordered w-full max-w-xs"
                      {...register("phone")}
                    />
                  </div>

                  <div className="form-control w-full max-w-xs">
                    <input
                      type="text"
                      placeholder="enter your education"
                      className="input input-bordered w-full max-w-xs"
                      {...register("edu")}
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <input
                      type="text"
                      placeholder="enter your city"
                      className="input input-bordered w-full max-w-xs"
                      {...register("city")}
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <input
                      type="text"
                      placeholder="enter your linkedin"
                      className="input input-bordered w-full max-w-xs"
                      {...register("linkedin")}
                    />
                  </div>

                  <input
                    className="btn w-full max-w-xs text-white"
                    type="submit"
                    value="Update profile"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
