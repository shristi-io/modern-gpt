import React from "react";
import { people, ai } from "../assets";

const Header = () => {
  return (
    <div className="flex max-lg:flex-col scroll-smooth" id="home">
      <div className="flex-1 flex justify-center items-start flex-col py-8 md:px-24 sm:px-16 max-sm:px-4">
        <h1 className="text-transparent bg-clip-text bg-gradientText font-manrope leading-[75px] text-[62px] font-bold max-sm:text-[48px]">
          Let's Build Something Amazing with GPT-4 OpenAI{" "}
        </h1>
        <p className="font-manrope font-semibold text-xl text-colorText mt-6 max-sm:text-base">
          Over 300 applications are delivering GPT-4–powered search,
          conversation, text completion, and other advanced AI features through
          the OpenAI API.
        </p>
        <div className="w-[100%] mt-8 mb-4 flex">
          <input
            className="flex-2 w-[100%] min-h-[50px] bg-[#052D56] font-manrope font-semibold text-lg text-white outline-none border-2 border-[#052D56] px-4 border-none rounded-l-lg m max-w-4xl max-sm:text-base"
            type="email"
            placeholder="Your Email Address"
          />
          <button className="flex-1 w-[100%] min-h-[50px] font-manrope font-bold text-lg bg-[#FF4820] text-white outline-none px-4 rounded-r-lg max-sm:text-base">
            Get Started
          </button>
        </div>
        <div className="w-[100%] flex justify-start items-center mt-8 max-sm:flex-col max-sm:gap-3">
          <img className="w-[181px] h-[38px]" src={people} alt="people" />
          <p className="font-manrope ml-4 font-medium text-sm text-center text-white">
            1600 people requested access in the last 24 hours
          </p>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img className="w-[100%] h-[100%]" src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
