import React from "react";

const cta = () => {
  return (
    <section className="flex justify-between items-center p-8 m-16 rounded-xl bg-gradientText lg:max-w-[70%] lg:mx-[auto] max-sm:flex-col max-sm:m-8 max-sm:gap-8 max-sm:p-4">
      <div className="gpt3__cta-content">
        <p className="font-manrope font-semibold text-sm text-[#0E0E0E] max-sm:text-[0.7rem] max-sm:text-black">
          Request Early Access to Get Started
        </p>
        <h3 className="font-manrope font-bold max-md:text-lg md:text-2xl">
          Register today & start exploring the endless possibilities
        </h3>
      </div>
      <div className="flex justify-center items-center ">
        <button className="bg-black rounded-full text-white font-manrope font-bold whitespace-nowrap px-4 py-2 border-none outline-none">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default cta;
