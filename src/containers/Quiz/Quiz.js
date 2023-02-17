import { useState } from "react";
import classes from "./Quiz.module.scss"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import quizzes from "../../storage/quizzes"
import { useParams } from "react-router-dom";

const quizList = quizzes.quiz

function Quiz() {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [results, setResults] = useState({});
    const [answerSate, setAnswerSate] = useState(null);
    const [quiz, setQuiz] = useState(quizList);
    const { id } = useParams()

    const onAnswerClickHandler = (answerId) => {
        if (answerSate) {
            const key = Object.keys(answerSate)[0]
            if (answerSate[key] === 'success') {
                return
            }
        }

        const question = quiz[activeQuestion]
        // ? unnecessary variable
        // const results = results

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
        return activeQuestion + 1 === quiz.length
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
                    isFinished
                        ? <FinishedQuiz
                            results={results}
                            quiz={quiz}
                            onRetry={retryHandler}
                        />
                        : <ActiveQuiz
                            question={quiz[activeQuestion].question}
                            questionNumber={activeQuestion + 1}
                            answers={quiz[activeQuestion].answers}
                            onAnswerClick={onAnswerClickHandler}
                            quizLength={quiz.length}
                            state={answerSate}
                        />
                }
            </div>
        </div>

    );
}


export default Quiz;