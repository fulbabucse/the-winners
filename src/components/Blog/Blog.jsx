import React from "react";

const Blog = () => {
  return (
    <div className="px-4 lg:px-20 w-full lg:w-3/4 mx-auto py-10">
      <div>
        <h1 className="text-xl font-bold italic text-gray-700">
          Q1: How does React works?
        </h1>
        <p className="text-justify">
          <strong className="italic">Answer:</strong> Introduction to ReactJS:
          Let us understand this with a practical example. Let’s say one of your
          friends posted a photograph on Facebook. Now you go and like the image
          and then you started checking out the comments too. Now while you are
          browsing over comments you see that the likes count has increased by
          100, since you liked the picture, even without reloading the page.
          This magical count change is because of ReactJS. React is a
          declarative, efficient, and flexible JavaScript library for building
          user interfaces. ‘V’ denotes the view in MVC. ReactJS is an
          open-source, component-based front end library responsible only for
          the view layer of the application. It is maintained by Facebook.
        </p>
      </div>
      <br />
      <div>
        <h1 className="text-xl font-bold italic text-gray-700">
          Q2: What is the purpose of React Router?
        </h1>
        <p className="text-justify">
          <strong className="italic">Answer:</strong> React Router is a standard
          library for routing in React. It enables the navigation among views of
          various components in a React Application, allows changing the browser
          URL, and keeps the UI in sync with the URL.
        </p>
      </div>
      <br />
      <div>
        <h1 className="text-xl font-bold italic text-gray-700">
          Q3: What is useRef Hook in React?
        </h1>
        <p className="text-justify">
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
