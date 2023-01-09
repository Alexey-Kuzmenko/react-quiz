import React from "react";
import classes from "./AnswersList.module.scss"
import AnswerItem from "./AnswerItem/AnswerItem";

function AnswersList(props) {
    return (
        <ul className={classes.AnswersList}>
            {props.answers.map((answer, i) => {
                return (
                    <AnswerItem
                        key={i}
                        answer={answer}
                        onAnswerClick={props.onAnswerClick}
                        state={props.state ? props.state[answer.id] : null}
                    />
                )
            })}
        </ul>
    );
}

export default AnswersList;