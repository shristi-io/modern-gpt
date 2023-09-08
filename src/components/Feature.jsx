import React from "react";

const Feature = ({ title, text, styleProp }) => {
  return (
    <div className={`feature ${styleProp}`}>
      <div className="flex-1 max-w-[180px] mr-8 max-h-[76px] min-h-[76px] max-sm:max-h-[40px] max-sm:min-h-[40px]">
        <div className="w-[38px] h-1 bg-gradientText shadow-lg mb-1" />
        <h1 className="font-manrope font-bold text-lg text-white max-sm:text-sm">
          {title}
        </h1>
      </div>
      <div className="mt-2 flex-2 max-w-[700px] max-md:max-w-[320px] flex">
        <p className="font-manrope font-medium text-sm text-colorText">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Feature;
