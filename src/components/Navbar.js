import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-purple-600 text-white justify-center  shadow flex flex-row mx-auto flex-wrap md:p-0 p-2">
      <div className="md:m-16 md:mt-4 md:mb-4 2xl:m-auto 2xl:mt-4 2xl:mb-4 max-w-screen-2xl flex w-full">
        <Link to="/">
          <div className="flex">
            <span role="img" aria-label="magnifying-glass" className="m-1">
              🔍
            </span>
            <h2 className="font-semibold md:text-2xl text-lg ml-22">
              ProjectHunt
            </h2>
          </div>
        </Link>
        <div className="ml-auto md:text-lg text-sm font-medium flex flex-wrap items-center  justify-center">
    
          <Link to="/addnewproject">
            <span className="m-2">
              Add Project
            </span>
          </Link>
    
          <Link to="/showcase">
            <span className="m-2">Showcase</span>
          </Link>
    
          <Link to="/login">
            <span className="m-2 border-2 p-1 rounded hover:bg-purple-500">
              Login
            </span>
          </Link>
    
        </div>
      </div>
    </header>
  );
};

export default Navbar;
