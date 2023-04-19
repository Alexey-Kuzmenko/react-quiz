import { useState } from "react";
import classes from "./Quiz.module.scss"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import { Navigate, useParams } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import { useGetQuizQuery } from "../../store/quizApi";

function Quiz() {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [results, setResults] = useState({});
    const [answerSate, setAnswerSate] = useState(null);
    const { id } = useParams()
    const { data = [], isLoading } = useGetQuizQuery(id)

    // ! debug
    console.log(id);
    console.log(data);

    if (id === ":id" || id === null) {
        console.log("id not found");
        return <Navigate to={"/"} replace />
    }

    const onAnswerClickHandler = (answerId) => {
        if (answerSate) {
            const key = Object.keys(answerSate)
            if (answerSate[key] === 'success') {
                return
            }
        }

        const question = data[activeQuestion]

        if (question.correctAnswerId === answerId) {

            if (!results[question.questionId]) {
                results[question.questionId] = 'success'
            }

            setAnswerSate({ [answerId]: 'success' })
            setResults(results)

            const timeout = window.setTimeout(() => {
                if (isQuizFinished()) {
                    setIsFinished(true)
                } else {
                    setActiveQuestion((prevQuestion => prevQuestion + 1))
                    setAnswerSate(null)
                }

                clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.questionId] = 'error'
            setAnswerSate({ [answerId]: 'error' })
            setResults(results)
        }
    }

    const isQuizFinished = () => {
        return activeQuestion + 1 === data.length
    }

    const retryHandler = (e) => {
        setActiveQuestion(0)
        setIsFinished(false)
        setResults({})
        setAnswerSate(null)
    }

    return (
        <div className={classes.Quiz}>
            <div className={classes.Quiz__innerContainer}>
                <h1 className={classes.Quiz__title}>Answer all questions</h1>
                {
                    isLoading
                        ?
                        <Loader />
                        :

                        isFinished
                            ?
                            <FinishedQuiz
                                results={results}
                                quiz={data}
                                onRetry={retryHandler}
                            />
                            : <ActiveQuiz
                                question={data[activeQuestion].question}
                                questionNumber={activeQuestion + 1}
                                answers={data[activeQuestion].answers}
                                onAnswerClick={onAnswerClickHandler}
                                quizLength={data.length}
                                state={answerSate}
                            />
                }

            </div>
        </div>

    );
}


export default Quiz;