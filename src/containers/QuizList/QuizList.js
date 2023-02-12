import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from "./QuizList.module.scss"

class QuizList extends Component {
    state = {}

    renderQuizes() {
        return [1, 2, 3].map((quiz, i) => {
            return (
                <li className={classes.QuizList__listItem} key={i}>
                    <Link to={`quiz/${quiz}`} className={classes.QuizList__link}>
                        {quiz}
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1 className={classes.QuizList__title}>List of tests</h1>
                    <ul className={classes.QuizList__list}>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default QuizList;