import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {Link} from 'react-router-dom'
import auth from "../../firebase_init";
import logo from '../../asset/Solar Motor.png'
import { HiMenu } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";


const Navber = () => {
   const [user]=useAuthState(auth)
    const signout =()=>{
       signOut(auth)
       localStorage.removeItem('accessToken')
    }
   
  const menuItems = <>
    <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      
        <li><Link to="/review">Reviews</Link></li>
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
            <div className="text-3xl mr-2">
            <HiMenu/>
            </div>
            
            
          </label>
          <ul
            tabIndex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
           {menuItems}
          </ul>
        </div>
        <Link to="/"><img className="h-18 w-38  " src={logo} alt="logo" /></Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 font-bold text-[gray]">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
     <label for="dashbord-sidebar" tabIndex="1"className="btn btn-ghost lg:hidden">
     <div className="text-3xl mr-2">
            <HiChevronDown/>
            </div>
      </label>
  </div>
      
    </div>
  );
};

export default Navber;
