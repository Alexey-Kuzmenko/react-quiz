import React from "react";
import './FinishedQuiz.scss'

function FinishedQuiz({ results, quiz }) {
    console.log(results);
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

            <p>Correct 4 from 5</p>

            <div>
                <button className="FinishedQuiz__button">Repeat</button>
            </div>
        </div >
    );
}

export default FinishedQuiz;