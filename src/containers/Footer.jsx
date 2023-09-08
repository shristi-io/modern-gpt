import React from "react";
import { logo2 } from "../assets";

const Footer = () => {
  return (
    <footer className="flex text-white flex-col justify-center items-center bg-colorFooter mt-16 py-8 md:pl-36 md:pr-24 sm:px-16 max-sm:px-4 ">
      <div className="w-full text-center mb-12 mt-8">
        <h1 className="text-transparent bg-clip-text bg-gradientText font-manrope font-bold text-[56px] max-md:text-3xl text-center">
          Do you want to step into future before others?
        </h1>
      </div>
      <div className="flex border-2 justify-center items-center px-4 py-2 cursor-pointer mb-16">
        <p className=" font-manrope space-x-1 text-xl">Request Early Access</p>
      </div>

      <div className="flex justify-between items-start flex-nowrap max-sm:flex-wrap w-full text-left">
        <div className="flex flex-col  w-[250px] m-4">
          <img className="w-[118px] h-[30px] mb-4" src={logo2} alt="logo" />
          <p className="font-manrope text-sm">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="flex justify-start flex-col w-[250px] m-4">
          <h4 className="font-manrope text-base mb-4 font-bold">Links</h4>
          <p className="font-manrope text-sm my-2 cursor-pointer">Github</p>
          <p className="font-manrope text-sm my-2 cursor-pointer">
            Social Media
          </p>
          <p className="font-manrope text-sm my-2 cursor-pointer">Counters</p>
          <p className="font-manrope text-sm my-2 cursor-pointer">Contact</p>
        </div>
        <div className="flex justify-start flex-col w-[250px] m-4">
          <h4 className="font-bold font-manrope text-base mb-4">Company</h4>
          <p className="font-manrope text-sm my-2 cursor-pointer">
            Terms & Conditions
          </p>
          <p className="font-manrope text-sm my-2 cursor-pointer">
            Privacy Policy
          </p>
          <p className="font-manrope text-sm my-2 cursor-pointer">Contact</p>
        </div>
        <div className="flex justify-start flex-col w-[250px] m-4">
          <h4 className="font-manrope text-base mb-4 font-bold">
            Get in Touch
          </h4>
          <p className="font-manrope text-sm my-2 cursor-pointer">
            Crechterwoord K12 182 DK Alknjkcb
          </p>
          <p className="font-manrope text-sm my-2 cursor-pointer">
            089-3876907
          </p>
          <p className="font-manrope text-sm my-2 cursor-pointer">
            info@openai.net
          </p>
        </div>
      </div>

      <div className="mt-8 text-center w-full">
        <p className="font-manrope text-sm">
          © 2023 GPT-4. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
