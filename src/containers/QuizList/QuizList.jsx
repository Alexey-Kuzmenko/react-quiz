import classes from "./QuizList.module.scss"
import Loader from '../../components/UI/Loader/Loader';
import { useDeleteQuizzesMutation, useGetQuizzesListQuery } from '../../store/quizApi';
import { useEffect, useState } from 'react';
import { autoLogout } from '../../store/logoutSlice';
import { useDispatch } from 'react-redux';
import QuizListItem from './QuizListItem/QuizListItem';
import Alert from "../../components/UI/Alert/Alert";

function QuizList() {
    const { data = [], isLoading } = useGetQuizzesListQuery()
    const [deleteQuiz] = useDeleteQuizzesMutation()
    const [isAlertShown, setIsAlertShown] = useState(true);
    const [quizId, setQuizId] = useState(null);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(autoLogout())
    }, [])

    function deleteQuizHandler(id) {
        setIsAlertShown(!isAlertShown)
        setQuizId(id)
    }

    async function onAlertClickHandler({ target }) {
        setIsAlertShown(false)
        if (target.classList.contains("fa-circle-check")) {
            await deleteQuiz(quizId)
            setQuizId(null)
        } else if (target.classList.contains("fa-ban")) {
            setQuizId(null)
        }
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
        <>
            <Alert text="Are you sure that you want to delete quiz?" type="default" isShown={isAlertShown} onClickHandler={onAlertClickHandler} />

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
        </>

    );
}


export default QuizList;