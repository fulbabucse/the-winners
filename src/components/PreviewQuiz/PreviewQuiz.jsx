import React from "react";
import QuizOptions from "../QuizOptions/QuizOptions";

const PreviewQuiz = ({ questionData }) => {
  const { id, correctAnswer, options, question } = questionData;
  console.log(questionData);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-5">
        <h1 className="mb-2 text-lg text-emerald-400 font-semibold">
          {question}
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {options.map((option, idx) => (
            <QuizOptions key={idx} option={option}></QuizOptions>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewQuiz;
