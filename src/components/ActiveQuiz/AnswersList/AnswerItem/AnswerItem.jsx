import React from "react";
import "./AnswerItem.scss"

function AnswerItem(props) {
    const classes = ['AnswerItem']

    if (props.state) {
        classes.push(`AnswerItem_${props.state}`)
    }

    return (
        <li className={classes.join(' ')} onClick={() => props.onAnswerClick(props.answer.id)}>
            {props.answer.text}
        </li>
    );
}

export default AnswerItem;