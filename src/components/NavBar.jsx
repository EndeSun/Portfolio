import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-14 h-8 rounded-lg bg-white items-center justify-center flex font-extrabold shadow-md text-center border-2 border-slate-200"
      >
        <p className="blue-gradient_text">Ende</p>
      </NavLink>

      {/* MARK: ABOUT
       */}
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>

        {/* MARK: PROJECTS
         */}
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
