import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Statistics from "./components/Statistics/Statistics";
import Topics from "./components/Topics/Topics";
import Main from "./layouts/Main";

function App() {
  const QuizData = () => fetch("https://openapi.programming-hero.com/api/quiz");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: QuizData,
          element: <Home></Home>,
        },
        { path: "/home", loader: QuizData, element: <Home></Home> },
        {
          path: "/topics",
          loader: QuizData,
          element: <Topics></Topics>,
        },
        { path: "/statistics", element: <Statistics></Statistics> },
        { path: "/blog", element: <Blog></Blog> },
        {
          path: "/topics/:id",
          loader: async ({ params }) =>
            fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz></Quiz>,
        },
      ],
    },
    { path: "*", element: <Error></Error> },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
