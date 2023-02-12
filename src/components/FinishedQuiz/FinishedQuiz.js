import React from "react";
import './FinishedQuiz.scss'
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

function FinishedQuiz({ results, quiz, onRetry }) {
    console.log(results);
    const successCount = Object.keys(results).reduce((acc, key) => {
        if (results[key] === 'success') {
            acc++
        }
        return acc
    }, 0)

    return (
        <div className="FinishedQuiz">
            <h1>Finished</h1>

            <ul className="FinishedQuiz__answersList">

                {
                    quiz.map((question, index) => {
                        const iconClasses = [
                            'fa-solid',
                            results[question.questionId] === 'error' ? 'fa-xmark' : 'fa-check',
                            'FinishedQuiz__Icon',
                            `FinishedQuiz__Icon_${results[question.questionId]}`,
                        ]
                        return (
                            <li key={index}>
                                <strong>{question.id}</strong> &nbsp;
                                {question.question}
                                <i className={iconClasses.join(' ')}></ i>
                            </li>
                        )
                    })
                }
            </ul>

            <p>Correct {successCount} from {quiz.length}</p>

            <div>
                <Button onRetry={onRetry} type="primary" >Retry</Button>
                <Link to="..">
                    <Button type="success" >Go to quiz list</Button>
                </Link>
            </div>
        </div>
    );
}

export default FinishedQuiz;