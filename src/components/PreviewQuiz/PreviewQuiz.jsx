import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import QuizOptions from "../QuizOptions/QuizOptions";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PreviewQuiz = ({ questionData }) => {
  const { correctAnswer, options, question } = questionData;
  const alertAnswer = () => {
    toast(correctAnswer);
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-5">
        <div className="flex justify-between items-center text-emerald-400">
          <h1 className="mb-2 text-lg  font-semibold">
            <strong>Question:</strong> {question}
          </h1>
          <button onClick={() => alertAnswer()}>
            <FontAwesomeIcon className="text-xl" icon={faEye}></FontAwesomeIcon>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {options.map((option, idx) => (
            <QuizOptions
              key={idx}
              option={option}
              correctAnswer={correctAnswer}
            ></QuizOptions>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PreviewQuiz;
