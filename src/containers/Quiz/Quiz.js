import React, { Component } from "react";
import classes from "./Quiz.module.scss"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import WithRouter from "../../hoc/WithRouter/WithRouter";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        isFinished: false,
        // ! testing
        // isFinished: true,
        results: {},
        answerSate: null,
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
        if (this.state.answerSate) {
            const key = Object.keys(this.state.answerSate)[0]
            if (this.state.answerSate[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.correctAnswerId === answerId) {

            if (!results[question.questionId]) {
                results[question.questionId] = 'success'
            }

            this.setState({
                answerSate: { [answerId]: 'success' },
                results,
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({ isFinished: true });
                } else {
                    this.setState((prevState) => {
                        return {
                            activeQuestion: prevState.activeQuestion + 1,
                            answerSate: null,
                        }
                    }
                    )
                }

                clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.questionId] = 'error'
            this.setState({
                answerSate: { [answerId]: 'error' },
                results,
            });
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = (e) => {
        this.setState({
            activeQuestion: 0,
            isFinished: false,
            results: {},
            answerSate: null
        });
    }

    // ! testing
    componentDidMount() {
        console.log(this.props.params);
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.Quiz__innerContainer}>
                    <h1 className={classes.Quiz__title}>Answer all questions</h1>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                            : <ActiveQuiz
                                question={this.state.quiz[this.state.activeQuestion].question}
                                questionNumber={this.state.activeQuestion + 1}
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLenght={this.state.quiz.length}
                                state={this.state.answerSate}
                            />
                    }
                </div>
            </div>
        );
    }
}

export default WithRouter(Quiz);