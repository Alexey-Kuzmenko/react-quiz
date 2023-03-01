import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import { Route, Routes } from "react-router-dom";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import NotFound from "./containers/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<QuizList />} />
        <Route path="auth" element={<Auth />} />
        <Route path="quiz-creator" element={<QuizCreator />} />
        <Route path="quiz/:id" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
