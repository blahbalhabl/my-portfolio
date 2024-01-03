/*
* Navigation Bar Component
*/

// Make the Developer Name Dynamic on line 11.

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const nav = useNavigate();

  return (
    <div className="flex justify-between items-center h-max py-16 font-bold">
      <div 
        className="flex items-center text-3xl gap-1 cursor-pointer"
        onClick={() => nav('/')}>
        <p>Leigh</p>
        <p className="font-normal">Dev</p>
      </div>
      <div className="flex gap-4 text-lg font-normal">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </div>
      <div className="flex gap-1 text-lg font-normal">
        <Link to={'/contact-me'} >Contact Me</Link>
        <button
          className=""
          // onClick={}
        >
          Dark
      </button>
      </div>
    </div>
  );
};

export default Navbar;
