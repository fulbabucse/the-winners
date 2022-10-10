import React from "react";
import { useLoaderData } from "react-router-dom";
import PreviewQuiz from "../PreviewQuiz/PreviewQuiz";

const Quiz = () => {
  const quizes = useLoaderData().data;
  const { id, name, questions, total } = quizes;
  return (
    <div className="px-4 mx-auto lg:max-w-7xl md:px-8 mt-10">
      <div className="text-center my-10">
        <h1 className="text-2xl text-emerald-400 font-bold">Quiz of {name}</h1>
      </div>
      <div className="w-full px-3 mx-auto md:w-2/4">
        {questions.map((question) => (
          <PreviewQuiz key={question.id} questionData={question}></PreviewQuiz>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
