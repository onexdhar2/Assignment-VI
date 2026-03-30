import React from "react";
import { SlHandbag } from "react-icons/sl";
// import Button from "../ChildComponent/Button";
const Navbar = ({ items }) => {
  return (
    <nav className="navbar bg-base-100 shadow-sm justify-around">
      <div>
        <a className="btn btn-ghost text-2xl font-bold text-[#4F39F6]">
          DigiTools
        </a>
      </div>
      <div className="font-bold">
        <ul className="flex gap-5 justify-center items-center">
          {items.map((item, indexNav) => (
            <li key={indexNav}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center gap-4">
        <a href="#">
          <SlHandbag />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
