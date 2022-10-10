import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizOptions = ({ option, correctAnswer }) => {
  const optionStyles = {
    fontFamily: "Hind Siliguri",
    fontWeight: "500",
  };

  const answer = (quizOption) => {
    if (quizOption === correctAnswer) {
      toast("Correct Answer!");
    } else {
      toast("Incorrect Answer!");
    }
  };

  return (
    <div className="border border-solid flex items-center p-3 rounded-lg">
      <label className="label cursor-pointer gap-2">
        <input
          type="radio"
          name="radio-6"
          className="radio checked:bg-emerald-300"
        />
        <span
          onClick={() => answer(option)}
          style={optionStyles}
          className="label-text text-base"
        >
          {option}
        </span>
      </label>
    </div>
  );
};

export default QuizOptions;
