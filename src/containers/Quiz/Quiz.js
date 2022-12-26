import React, { Component } from "react";
import classes from "./Quiz.module.scss"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";


class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'What colour is sky?',
                correctAnswerId: 1,
                questionId: 1,
                answers: [
                    {
                        text: 'Light-blue',
                        id: 1
                    },
                    {
                        text: 'Orange',
                        id: 2
                    },
                    {
                        text: 'Red',
                        id: 3
                    }
                ]
            },
            {
                question: 'Which car brand is my favourite?',
                correctAnswerId: 3,
                questionId: 2,
                answers: [
                    {
                        text: 'Audi',
                        id: 1
                    },
                    {
                        text: 'BMW',
                        id: 2
                    },
                    {
                        text: 'Mercedes-AMG',
                        id: 3
                    }
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log(`Answer id: ${answerId}`);
        this.setState((prevState) => {
            return {
                activeQuestion: prevState.activeQuestion + 1
            }
        }
        )
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.Quiz__innerContainer}>
                    <h1 className={classes.Quiz__title}>Answer all questions</h1>
                    <ActiveQuiz
                        question={this.state.quiz[this.state.activeQuestion].question}
                        questionNumber={this.state.activeQuestion + 1}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLenght={this.state.quiz.length}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;