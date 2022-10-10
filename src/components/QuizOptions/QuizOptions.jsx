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
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <input
            type="checkbox"
            name="checkbox"
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
    </div>
  );
};

export default QuizOptions;
