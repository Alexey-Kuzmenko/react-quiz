class Quiz {
    constructor(question, correctAnswerId, questionId, answers) {
        this.question = question
        this.correctAnswerId = correctAnswerId
        this.questionId = questionId
        this.answers = this.setAnswers(answers)
    }

    setAnswers(answers) {
        return answers.map(answer => {
            return {
                text: answer.value,
                id: answer.id
            }
        });
    }

    getAnswers() {
        return this.answers
    }

    getCorrectAnswerId() {
        return this.correctAnswerId
    }

    getQuestionId() {
        return this.questionId
    }
}

export default Quiz