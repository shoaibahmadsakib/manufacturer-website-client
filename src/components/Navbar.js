import React from "react";
import { Link } from "react-router-dom";
import { AuthStateHook, useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logOut =()=>{
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
  const navItem = (
    <>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/myportfolio">profile</Link>
      </li>
      {user ? (
        <li>
          <button className="btn btn-primary" onClick={logOut}>
            Log out
          </button>
        </li>
      ) : (
        <li>
          <Link to="/signin" className="btn btn-accent">
            Sign in
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              ></path>
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>

       <Link to='/'>
       <a class="btn btn-ghost normal-case text-xl">Urgent manufacturer</a>
       </Link> 
      </div>
       {/* for dashboard */}
       <div class="navbar-end ">
          <label tabindex="0" for="my-drawer-2" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              ></path>
            </svg>
          </label>
        </div>
       
      <div class="navbar-end hidden lg:flex">
       
        <ul class="menu menu-horizontal p-0">{navItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
