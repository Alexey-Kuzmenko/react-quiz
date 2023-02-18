import { Link } from 'react-router-dom';
import classes from "./QuizList.module.scss"

function QuizList() {
    function renderQuizzes() {
        return [1, 2, 3].map((quiz, i) => {
            return (
                <li className={classes.QuizList__listItem} key={i}>
                    <Link to={`quiz/${quiz}`} className={classes.QuizList__link}>
                        {quiz}
                    </Link>
                </li>
            )
        })
    }
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