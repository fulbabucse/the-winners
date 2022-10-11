import React from "react";

const Blog = () => {
  return (
    <div className="px-4 lg:px-20 w-full lg:w-3/4 mx-auto py-10 text-emerald-300">
      <div>
        <h1 className="text-xl font-bold italic">
          Q1: What is the purpose of React Router?
        </h1>
        <p className="text-justify font-semibold">
          <strong className="italic">Answer:</strong> React Router is a standard
          library for routing in React. It enables the navigation among views of
          various components in a React Application, allows changing the browser
          URL, and keeps the UI in sync with the URL.
        </p>
      </div>
      <br />
      <div>
        <h1 className="text-xl font-bold italic">
          Q2: How does Context API works in React?
        </h1>
        <p className="text-justify font-semibold">
          <strong className="italic">Answer:</strong> In a typical React
          application, data is passed top-down (parent to child) via props, but
          such usage can be cumbersome for certain types of props (e.g. locale
          preference, UI theme) that are required by many components within an
          application. Context provides a way to share values like these between
          components without having to explicitly pass a prop through every
          level of the tree.
        </p>
      </div>
      <br />

      <div>
        <h1 className="text-xl font-bold italic">
          Q3: What is useRef Hook in React?
        </h1>
        <p className="text-justify font-semibold">
          <strong className="italic">Answer:</strong> useRef returns a mutable
          ref object whose .current property is initialized to the passed
          argument ( initialValue ). The returned object will persist for the
          full lifetime of the component. Essentially, useRef is like a “box”
          that can hold a mutable value in its .current property.
        </p>
      </div>
    </div>
  );
};

export default Blog;
