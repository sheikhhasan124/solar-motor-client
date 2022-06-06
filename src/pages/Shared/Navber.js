import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {Link} from 'react-router-dom'
import auth from "../../firebase_init";

const Navber = () => {
   const [user]=useAuthState(auth)
    const signout =()=>{
       signOut(auth)
       localStorage.removeItem('accessToken')
    }
   
  const menuItems = <>
    <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/portfolio">My portFolio</Link></li>

        {user&& <li><Link to="/dashboard">Dashbord</Link></li>}

        <div className="relative btn lg:left-48 btn-gradient">
        {user? <button onClick={signout} className="">Sign Out</button>:<li><Link to="/login">login</Link></li>}
        </div>
  </>

  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabIndex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
           {menuItems}
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-xl">Solar Motor</Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
     <label for="dashbord-sidebar" tabIndex="1"className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg"className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div>
      
    </div>
  );
};

export default Navber;
