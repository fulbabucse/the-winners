import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full shadow z-10 block">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-3 md:block">
            <NavLink className="brand-name ani__underline" to="/">
              The Winners
            </NavLink>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <XMarkIcon className="w-6 h-6 text-white"></XMarkIcon>
                ) : (
                  <Bars3BottomRightIcon className="w-6 h-6 text-white"></Bars3BottomRightIcon>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 w-full md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center  md:flex md:space-y-0">
              <li className="nav-items">
                <NavLink to="/home">Home</NavLink>
              </li>

              <li className="nav-items">
                <NavLink to="/topics">Topics</NavLink>
              </li>
              <li className="nav-items">
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li className="nav-items">
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
