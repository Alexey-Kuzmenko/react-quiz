import classes from "./QuizListItem.module.scss"
import { Link } from "react-router-dom";


function QuizListItem({ quizId, quizName, onClickHandler }) {
    return (
        <li className={classes.QuizListItem}>
            <Link to={`quiz/${quizId}`} className={classes.QuizListItem__link}>
                {quizName}
            </Link>
            <div onClick={onClickHandler}>
                <i className={`fa-solid fa-xmark ${classes.QuizListItem__icon}`}></i>
            </div>
        </li>
    );
}

export default QuizListItem;