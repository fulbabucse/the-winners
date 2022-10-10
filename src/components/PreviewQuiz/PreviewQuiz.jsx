import React from "react";

const PreviewQuiz = ({ questionData }) => {
  const { id, correctAnswer, options, question } = questionData;
  console.log(questionData);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <h1>{question}</h1>
        <div>
          <input type="radio" name="radio-4" className="radio radio-accent" />
        </div>
      </div>
    </div>
  );
};

export default PreviewQuiz;
