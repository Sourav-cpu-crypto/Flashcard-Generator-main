import React from 'react';
import logo from "../../assets/logo.jpg";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="py-5 bg-white pl-6">
        <img className="w-70 h-10" src={logo} alt="logo"></img>
      </div>
      <div className="max-w-[1100px] mx-auto mt-10">
        <h1 className="text-3xl font-bold">Create Falshcard</h1>
        <div className="flex mt-2 text-xl gap-5 mb-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 underline underline-offset-8 font-bold"
                : ""
            }
          >
            Create New
          </NavLink>
          <NavLink
            to="/allcard"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 underline underline-offset-8 font-bold"
                : ""
            }
          >
            My FlashCard
          </NavLink>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Header;
