import React from "react";

const Article = ({ imgURL, date, title }) => {
  return (
    <section className="w-[100%] h-[100%] flex flex-col bg-colorFooter">
      <div className="w-full h-full bg-colorFooter">
        <img className="w-full h-full" src={imgURL} alt="blog image" />
      </div>

      <div className="flex flex-col justify-between py-4 px-4 h-full">
        <div>
          <p className="font-manrope font-bold text-sm text-white">{date}</p>
          <h3 className="font-manrope font-bold text-2xl text-white mb-8 cursor-pointer max-md:text-lg">
            {title}
          </h3>
        </div>
        <p className="font-manrope font-bold text-sm text-white cursor-pointer">
          Read full article
        </p>
      </div>
    </section>
  );
};

export default Article;
