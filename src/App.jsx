import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import { Route, Routes } from "react-router-dom";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import NotFound from "./containers/NotFound/NotFound";
import Logout from "./components/Logout/Logout";
// ! testing
import { useDispatch, useSelector } from "react-redux";
import { keepSession } from "./store/logoutSlice";
import { useEffect } from "react";



function App() {
  const token = useSelector(state => state.logout.token)
  // ! testing
  const dispatch = useDispatch()
  // ! debug
  console.log(token);
  // ! testing
  useEffect(() => {
    dispatch(keepSession())
  }, [])

  let routes = (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<QuizList />} />
          <Route path="quiz-creator" element={<QuizCreator />} />
          <Route path="quiz/:id" element={<Quiz />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    )
  }

  return (
    <>
      {routes}
    </>
  );
}

export default App;
