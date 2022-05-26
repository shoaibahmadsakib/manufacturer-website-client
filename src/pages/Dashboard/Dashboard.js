import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile bg-slate-300">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <Outlet />
      </div>

      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
         {!admin &&
           <>
            <li>
            <Link to="/dashboard/myorder">myorder</Link>
          </li>

          <li>
            <Link to="/dashboard/addreview">Add review</Link>
          </li>

          <li>
            <Link to="/dashboard/myprofile">My profile</Link>
          </li>
           </>
         }
          {admin && (
            <>
              <li>
                <Link to="/dashboard/userinfo">user onformation</Link>
              </li>
              <li>
                <Link to="/dashboard/manageProduct">Manage Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manageOrder">Manage Order</Link>
              </li>
              <li>
                <Link to="/dashboard/makeadmin">Make Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/additem">Add item</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
