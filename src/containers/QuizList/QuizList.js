import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from "./QuizList.module.scss"
import store from '../../store/store';
import Loader from '../../components/UI/Loader/Loader';
import { useGetQuizzesQuery } from '../../store/quizApi';

function QuizList() {
    const { data = [], isLoading } = useGetQuizzesQuery()

    // ! debug 
    console.log(data)

    function renderQuizzes() {
        return data.map(({ id, name }) => {
            return (
                <li className={classes.QuizList__listItem} key={id}>
                    <Link to={`quiz/${id}`} className={classes.QuizList__link}>
                        {name}
                    </Link>
                </li>
            )
        })
    }

    return (
        <div className={classes.QuizList}>
            <div className={classes.QuizList__innerFlexContainer}>
                <h1 className={classes.QuizList__title}>List of tests</h1>
                {
                    isLoading
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