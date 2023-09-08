import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { logo, logo2 } from "../assets";

const Menu = () => {
  return (
    <>
      <a
        className="nav-link max-lg:text-sm max-lg:mx-1 max-sm:my-4"
        href="#home"
      >
        Home
      </a>
      <a
        className="nav-link max-lg:text-sm max-lg:mx-1 max-sm:my-4"
        href="#wgpt4"
      >
        What is GPT4?
      </a>
      <a
        className="nav-link max-lg:text-sm max-lg:mx-1 max-sm:my-4"
        href="#possibility"
      >
        Open AI
      </a>
      <a
        className="nav-link max-lg:text-sm max-lg:mx-1 max-sm:my-4"
        href="#features"
      >
        Case Studies
      </a>
      <a
        className="nav-link max-lg:text-sm max-lg:mx-1 max-sm:my-4"
        href="#blog"
      >
        Library
      </a>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex justify-between items-center py-8 md:px-24 sm:px-16 max-sm:px-4 ">
      <div className="flex-1 flex justify-start items-center">
        <div className="mr-8 max-md:mr-4 max-sm:ml-8">
          <img src={logo2} alt="logo" className="lg:w-full lg:h-full" />
        </div>
        <div className="flex flex-nowrap max-sm:hidden">
          <Menu />
        </div>
      </div>
      <div className="flex justify-end items-center">
        <p className="nav-link max-lg:text-sm">Sign In</p>
        <button className="py-2 px-4 text-white font-manrope bg-[#ff4820] font-medium text-lg leading-6 rounded-md max-lg:text-sm border-none outline-none">
          Sign Up
        </button>
      </div>
      <div className="ml-4 hidden relative max-sm:flex">
        {toggleMenu ? (
          <RiCloseLine
            className="text-white text-2xl cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="text-white text-2xl cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="flex justify-end items-end flex-col text-end bg-colorFooter p-8 absolute top-10 right-0 mt-4 min-w-[210px] rounded-md shadow-sm animate-scaleup">
            <div className="flex flex-col">
              <Menu />
            </div>
            <div className="hidden">
              <p>Sign In</p>
              <button>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
