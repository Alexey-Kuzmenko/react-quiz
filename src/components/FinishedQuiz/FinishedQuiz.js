import React from "react";
import classes from './FinishedQuiz.module.scss'

function FinishedQuiz(props) {
    return (
        <div className={classes.FinishedQuiz}>
            <h1>Finished</h1>

            <ul className={classes.FinishedQuiz__answersList}>
                <li className={classes.FinishedQuiz__answersItem}>
                    <strong>1.</strong>
                    How are you?
                    <i className={`fa-solid fa-check ${classes.FinishedQuiz__Icon} ${classes.FinishedQuiz__Icon_success}`}></ i>
                </li>

                <li className={classes.FinishedQuiz__answersItem}>
                    <strong>1.</strong>
                    How are you?
                    <i className={`fa-solid fa-xmark ${classes.FinishedQuiz__Icon} ${classes.FinishedQuiz__Icon_error}`}></ i>
                </li>
            </ul>

            <p>Correct 4 from 5</p>

            <div>
                <button className={classes.FinishedQuiz__button}>Repeat</button>
            </div>
        </div >
    );
}

export default FinishedQuiz;