import React from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import { Route, Routes } from "react-router-dom";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* home page */}
        <Route index element={<QuizList />} />
        <Route path="auth" element={<Auth />} />
        <Route path="quiz-creator" element={<QuizCreator />} />
        <Route path="quiz/:id" element={<Quiz />} />
        {/* test solution */}
        <Route path="*" element={<div><h1>Page not found! 404</h1></div>} />
      </Route>
    </Routes>
  );
}

export default App;
