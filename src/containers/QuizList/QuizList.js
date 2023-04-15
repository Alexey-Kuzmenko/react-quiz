import { Link } from 'react-router-dom';
import classes from "./QuizList.module.scss"
import Loader from '../../components/UI/Loader/Loader';
import { useGetQuizzesListQuery } from '../../store/quizApi';
import { useEffect } from 'react';
// ! testing
import { autoLogout } from '../../store/logoutSlice';
import { useDispatch } from 'react-redux';


function QuizList() {
    const { data = [], isLoading } = useGetQuizzesListQuery()
    // ? potential solution
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(autoLogout())
    }, [])

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