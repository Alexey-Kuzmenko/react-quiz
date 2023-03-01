import axios from "axios"
import apiConfig from "../api/config"


class Store {
    constructor(apiConfig) {
        this.url = apiConfig.url
        this.quizzesList = null
        this.quizzes = null
        this.userQuizzes = null
    }

    async init() {
        try {
            const response = await axios.get(this.url)
            const data = await response.data

            this.quizzesList = this.serializeQuizzesList(data)
            // ? test solution
            this.quizzes = data
            return response
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async sendQuizzes(quiz) {
        try {
            this.userQuizzes = quiz
            await axios.post(this.url, quiz)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    serializeQuizzesList(quizzesList) {
        const quizzesArr = []
        Object.keys(quizzesList).forEach((hash, index) => {
            quizzesArr.push({
                id: hash,
                name: `Quiz №${index + 1}`
            })
        })

        return quizzesArr
    }

    async clearDataBase() {
        try {
            const response = await axios.post(this.url, null)
            if (response.statusText === 'OK') {
                alert("Database successfully cleared")
            }
        } catch (error) {
            console.error(error)
        }
    }

    removeQuizzes() {
        this.quizzesList = null
        this.quizzes = null
    }

    removeUserQuizzes() {
        this.userQuizzes = null
    }

}


const store = new Store(apiConfig);

export default store