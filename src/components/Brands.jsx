import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "../assets";

const Brands = () => {
  return (
    <div className="bg-colorBg flex flex-wrap justify-center items-center h-72 max-sm:pb-8">
      <div className="brand">
        <img src={google} alt="google" />
      </div>
      <div className="brand">
        <img src={slack} alt="slack" />
      </div>
      <div className="brand">
        <img src={atlassian} alt="atlassian" />
      </div>
      <div className="brand">
        <img src={dropbox} alt="dropbox" />
      </div>
      <div className="brand">
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brands;
