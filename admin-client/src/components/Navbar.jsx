import React from "react";
import imgUrl from "../assets/pngegg.png";
import { NavLink, Link } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Navbar() {
  const handleLogout = (e) => {
    localStorage.clear()
    toast.success(`See you later !`)
  }

  return (
    <div className="w-full h-12 bg-green-800 flex justify-between">
      <div className="flex gap-3 text-white m-3 ">
        <div className="relative -top-5 mr-4 w-[60px]">
          <img src={imgUrl} />
        </div>
        <div className="mr-4">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "yellow" : "inherit",
              };
            }}
          >
            MENU
          </NavLink>
        </div>
        <div className="mr-4">
          <NavLink
            to="/category"
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "yellow" : "inherit",
              };
            }}
          >
            CATEGORIES
          </NavLink>
        </div>
        <div className="mr-4">
          <NavLink
            to="/adm-regis"
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "yellow" : "inherit",
              };
            }}
          >
            REGISTER ADMIN
          </NavLink>
        </div>
      </div>
      <div className="flex text-white m-3 gap-3">
        <Link to={'/adm-login'}>
          <div className="mr-4" onClick={handleLogout}>Logout</div>
        </Link>
      </div>
    </div>
  );
}
