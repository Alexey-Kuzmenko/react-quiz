import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from "./QuizList.module.scss"

function QuizList() {
    const [quizzesList, setQuizzesList] = useState([]);
    function renderQuizzes() {
        return quizzesList.map(({ id, name }, i) => {
            return (
                <li className={classes.QuizList__listItem} key={id}>
                    <Link to={`quiz/${id}`} className={classes.QuizList__link}>
                        {name}
                    </Link>
                </li>
            )
        })
    }
    // ? proposal solution
    async function getQuizzes() {
        try {
            const response = await axios.get('https://react-quiz-game-ee138-default-rtdb.europe-west1.firebasedatabase.app/quizes.json')
            console.log(response.data);
            const quizzes = []
            Object.keys(response.data).forEach((hash, i) => {
                quizzes.push({
                    id: hash,
                    name: `Quiz №${i + 1}`
                })
            })
            setQuizzesList(quizzes)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    // ! testing 
    useEffect(() => {
        getQuizzes()
    }, []);

    return (
        <div className={classes.QuizList}>
            <div>
                <h1 className={classes.QuizList__title}>List of tests</h1>
                <ul className={classes.QuizList__list}>
                    {renderQuizzes()}
                </ul>
            </div>
        </div>
    );
}


export default QuizList;