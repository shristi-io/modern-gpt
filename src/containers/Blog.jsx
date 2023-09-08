import React from "react";
import { Article } from "../components";
import { blog01, blog02, blog03, blog04, blog05 } from "../assets";

const Blog = () => {
  return (
    <section
      id="blog"
      className="flex flex-col py-8 md:pl-36 md:pr-24 sm:px-16 max-sm:px-4"
    >
      <div className="w-full text-left mb-20">
        <h1 className="text-transparent bg-clip-text bg-gradientText font-manrope font-bold text-[56px] leading-normal ">
          A lot is happening, <br />
          We are blogging about it.
        </h1>
      </div>
      <div className="flex max-lg:flex-col-reverse">
        <div className="flex-[0.75] mr-4 ">
          <Article
            imgURL={blog01}
            title="GPT-4 and Open AI is the future. Let us explore how it is?"
            date="Sep 4, 2023"
          />
        </div>
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-8 max-md:mb-8">
          <Article
            imgURL={blog02}
            title="GPT-4 and Open AI is the future. Let us explore how it is?"
            date="Aug 21, 2023"
          />
          <Article
            imgURL={blog03}
            title="GPT-4 and Open AI is the future. Let us explore how it is?"
            date="Aug 7, 2023"
          />
          <Article
            imgURL={blog04}
            title="GPT-4 and Open AI is the future. Let us explore how it is?"
            date="July 15, 2023"
          />
          <Article
            imgURL={blog05}
            title="GPT-4 and Open AI is the future. Let us explore how it is?"
            date="June 19, 2023"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
