import React from "react";
import { possibility } from "../assets";

const Possibility = () => {
  return (
    <section
      className="flex max-sm:flex-col max-sm:gap-4 items-center py-8 md:px-24 sm:px-16 max-sm:px-4"
      id="possibility"
    >
      <div className="flex-1 flex justify-start items-center mr-8">
        <img
          className="w-[100%] h-[100%]"
          src={possibility}
          alt="possibility"
        />
      </div>
      <div className="flex-1 flex flex-col justify-end items-start gap-4">
        <h4 className="font-manrope font-medium text-base text-[#71E5FF]">
          Request Early Access to Get Started
        </h4>
        <h1 className="text-transparent bg-clip-text bg-gradientText font-manrope font-bold text-[34px] ">
          The possibilities are beyond your imagination
        </h1>
        <p className="font-manrope font-medium text-base text-colorText">
          Solve math problems, answer questions, make inferences or tell
          stories. In addition, GPT-4 can summarize large chunks of content,
          which could be useful for either consumer reference or business use
          cases, such as a nurse summarizing the results of their visit to a
          client.
        </p>
        <h4 className="font-manrope font-medium text-base text-[#FF8A71]">
          Request for Early Access
        </h4>
      </div>
    </section>
  );
};

export default Possibility;
