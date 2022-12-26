import React, { Component } from "react";
import classes from "./Quiz.module.scss"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";


class Quiz extends Component {
    state = {
        quiz: []
    }
    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.Quiz__innerContainer}>
                    <h1 className={classes.Quiz__title}>Quiz</h1>
                    <ActiveQuiz />
                </div>
            </div>
        );
    }
}

export default Quiz;