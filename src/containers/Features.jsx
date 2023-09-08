import React from "react";
import { Feature } from "../components";

const featuresData = [
  {
    title: "Natural Language Understanding",
    text: "GPT-4 can understand and generate human-like text, making it highly capable in natural language understanding and generation tasks.",
  },
  {
    title: "Contextual Understanding",
    text: "GPT-4 has the ability to maintain context over longer passages of text, enabling it to generate text that remains coherent and contextually relevant over extended interactions.",
  },
  {
    title: "Content Summarization",
    text: "GPT-4 can generate concise summaries of longer texts, making it valuable for tasks like news summarization and document summarization.",
  },
  {
    title: "Search Engine Enhancement",
    text: "GPT-4 can be used to enhance search engines by providing more natural and context-aware search results.",
  },
];

const Features = () => {
  return (
    <section
      className="w-[100%] flex justify-between py-8 md:pl-36 md:pr-24 sm:px-16 max-sm:px-4 max-md:flex-col max-w-[2000px] xl:mx-auto"
      id="features"
    >
      <div className="flex-1 flex justify-start items-start flex-col text-left mr-20">
        <h1 className="font-manrope font-bold text-4xl text-transparent bg-clip-text bg-gradientText max-md:text-2xl">
          The Future is Now and You Just Need to Realize it. Step into Future
          Today & Make it Happen.
        </h1>
        <p className="font-manrope text-[#FF8A71] font-medium mt-8 text-base max-sm:mb-8">
          Request Early Access to Get Started
        </p>
      </div>
      <div className="flex-[1.5] flex  justify-start items-center flex-col">
        {featuresData.map((data) => {
          return <Feature {...data} />;
        })}
      </div>
    </section>
  );
};

export default Features;
