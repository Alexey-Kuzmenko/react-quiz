import React from "react";
import classes from "./ActiveQuiz.module.scss"
import AnswersList from "./AnswersList/AnswersList";

function ActiveQuiz(props) {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>{props.questionNumber}.</strong>&nbsp;
                    {props.question}
                </span>
                <small>
                    {`${props.questionNumber} from ${props.quizLenght}`}
                </small>
            </p>

            <AnswersList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
                state={props.state}
            />
        </div>
    );
}

export default ActiveQuiz;