import React from "react";

const QuizOptions = ({ option }) => {
  const optionStyles = {
    fontFamily: "Hind Siliguri",
    fontWeight: "500",
  };
  return (
    <div className="border border-solid flex items-center p-3 rounded-lg">
      <label className="label cursor-pointer gap-2">
        <input
          type="radio"
          name="radio-6"
          className="radio checked:bg-emerald-300"
          checked
        />
        <span style={optionStyles} className="label-text text-base">
          {option}
        </span>
      </label>
    </div>
  );
};

export default QuizOptions;
