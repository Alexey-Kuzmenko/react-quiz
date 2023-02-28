import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from "./QuizList.module.scss"
import store from '../../store/store';


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

    // ! testing 
    useEffect(() => {
        store.init().then(res => {
            console.log(res);
            if (res.statusText === 'OK') {
                setQuizzesList(store.quizzesList)
            }
        }).catch(error => { throw new Error(error) })

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