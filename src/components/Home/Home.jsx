import React from "react";
import Topics from "../Topics/Topics";

const Home = () => {
  return (
    <div className="px-4 mx-auto lg:max-w-7xl md:px-8 my-6">
      <div className="text-emerald-300">
        <h1 className="text-3xl font-bold">Web Development Quizzes & Answer</h1>
        <p className="text-base font-semibold text-justify mt-2">
          The internet connects everyone nowadays and web development is a huge
          part of our society. If you want to be well-known throughout the world
          then you should probably develop your own website or a web page. Our
          trivia on web development has questions about every aspect concerning
          web development nowadays and will test your knowledge on the matter.
          Can you face all these questions?
        </p>
      </div>
      <Topics></Topics>
    </div>
  );
};

export default Home;
