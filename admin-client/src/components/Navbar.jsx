import React from "react";
import imgUrl from "../assets/pngegg.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
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
        <div className="mr-4">Logout</div>
      </div>
    </div>
  );
}
