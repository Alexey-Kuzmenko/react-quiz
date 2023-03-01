import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from "./QuizList.module.scss"
import store from '../../store/store';
import Loader from '../../components/UI/Loader/Loader';

function QuizList() {
    const [quizzesList, setQuizzesList] = useState([]);
    const [loading, setLoading] = useState(true);

    function renderQuizzes() {
        return quizzesList.map(({ id, name }) => {
            return (
                <li className={classes.QuizList__listItem} key={id}>
                    <Link to={`quiz/${id}`} className={classes.QuizList__link}>
                        {name}
                    </Link>
                </li>
            )
        })
    }

    useEffect(() => {
        store.init().then(res => {
            // ! debug
            console.log(res);
            setLoading(false)
            if (res.statusText === 'OK') {
                setQuizzesList(store.quizzesList)
            }
        }).catch(error => { throw new Error(error) })

    }, []);

    return (
        <div className={classes.QuizList}>
            <div className={classes.QuizList__innerFlexContainer}>
                <h1 className={classes.QuizList__title}>List of tests</h1>
                {
                    loading
                        ?
                        <Loader />
                        :
                        <ul className={classes.QuizList__list}>
                            {renderQuizzes()}
                        </ul>
                }
            </div>
        </div>
    );
}


export default QuizList;