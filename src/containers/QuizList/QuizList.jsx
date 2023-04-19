import classes from "./QuizList.module.scss"
import Loader from '../../components/UI/Loader/Loader';
import { useDeleteQuizzesMutation, useGetQuizzesListQuery } from '../../store/quizApi';
import { useEffect } from 'react';
import { autoLogout } from '../../store/logoutSlice';
import { useDispatch } from 'react-redux';
import QuizListItem from './QuizListItem/QuizListItem';

function QuizList() {
    const { data = [], isLoading } = useGetQuizzesListQuery()
    const [deleteQuiz] = useDeleteQuizzesMutation()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(autoLogout())
    }, [])

    function deleteQuizHandler(id) {
        deleteQuiz(id)
    }

    function renderQuizzes() {
        return data.map(({ id, name }) => {
            return (
                <QuizListItem
                    key={id}
                    quizId={id}
                    quizName={name}
                    onClickHandler={(e) => { deleteQuizHandler(id) }}
                />
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