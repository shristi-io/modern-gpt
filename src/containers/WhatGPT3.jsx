import React from "react";
import { Feature } from "../components";

const WhatGPT3 = () => {
  return (
    <section
      id="wgpt4"
      className="bg-colorBg m-0 border-none flex justify-center items-center"
    >
      <div className="gpt3__whatgpt3 py-8 md:mx-24 sm:mx-16 max-sm:mx-4 w-[80%]">
        <div className="gpt3__whatgpt3-feature flex">
          <Feature
            title="What is GPT-4"
            text="GPT-4's deep learning neural network is a model with over 175 billion machine learning parameters. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text. The GPT models are general-purpose language models that can perform a broad range of tasks from creating original content to write code, summarizing text, and extracting data from documents."
            styleProp="flex-row justify-between max-sm:flex-col"
          />
        </div>
        <div className="flex justify-between items-center my-16 mx-4 font-manrope max-md:flex-col max-md:gap-8">
          <h1 className="text-[34px] leading-[45px] font-bold max-w-[510px] text-transparent bg-clip-text bg-gradientText max-sm:text-lg">
            The possibilities are beyond your imagination
          </h1>
          <p className="font-medium text-base text-colorSubText cursor-pointer max-sm:text-sm">
            Explore the Library &#8594;
          </p>
        </div>
        <div className="flex flex-wrap mt-8">
          <Feature
            title="Chatbots"
            text="GPT 4 Chatbot is a large language model chatbot capable of interacting with the user in a conversational way. This AI model uses an advanced dialogue format that allows users to elaborate on the information, answer questions, admit mistakes, challenge incorrect data, and reject irrelevant information."
            styleProp="flex-col justify-start"
          />
          <Feature
            title="Knowledgebase"
            text="Centralized repository of information and data that is organized and structured in a way that allows for efficient retrieval and use of that information. Knowledge bases are used in various contexts."
            styleProp="flex-col justify-start"
          />
          <Feature
            title="Education"
            text="Unlike a lot of language models, GPT-4 does not need Transfer Learning, where the model is fine-tuned on task specific data sets for specific tasks. The applications of GPT-4 are in context learning, where a model is fed with a task/prompt/shot or an example and it responds to it on the basis of the skills and pattern recognition abilities that were learned during the training to adapt to the current specific task."
            styleProp="flex-col justify-start"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatGPT3;
