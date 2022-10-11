import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  const errorStyles = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={errorStyles} className="error">
      <div className="text-center">
        <h1 className="pointer-events-none absolute left-1/2 top-28 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5 text-white">
          404 Error
        </h1>
      </div>
      <div className="text-xl text-center opacity-80 leading-10 mb-4">
        <h1 className="text-3xl">Oops!</h1>
        <h3>Sorry, an unexpected error has occurred.</h3>
        <p className="text-slate-200 italic">Page not found</p>
      </div>
      <div className="primary__btn__section">
        <Link to="/" className="primary__button">
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Error;
