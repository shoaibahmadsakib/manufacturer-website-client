import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import {useQuery} from 'react-query'
import UserRow from "./UserRow";

const UserInfo = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://dry-ravine-60510.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }


  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>no</th>
            <th>Email</th>
            <th>Make admin</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
