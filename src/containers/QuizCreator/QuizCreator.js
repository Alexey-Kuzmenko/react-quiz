import { useState } from "react";
import classes from "./QuizCreator.module.scss"
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import FormControls from "../../form/fromFramework";
// ! testing
const test = new FormControls("email", "email", true, true)
test.setRules({ email: "email", minLength: 6 })
console.log(test);

function QuizCreator() {
    const [quiz, setQuiz] = useState([]);
    const [formControls, setFormControls] = useState(
        {
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
        }
    );

    const onFormSubmitHandler = (e) => {
        e.preventDefault()
    }

    const addQuestionHandler = ({ target }) => {
        console.log(`You click ${target}`);
    }

    const createQuizHandler = ({ target }) => {
        console.log(`You click ${target}`);
    }

    return (
        <div className={classes.QuizCreator}>
            <div className={classes.QuizCreator__innerFlexContainer}>
                <h1 className={classes.QuizCreator__title}>Create quiz</h1>
                <form className={classes.QuizCreator__form} onSubmit={onFormSubmitHandler}>
                    <input type="text" />
                    <hr />

                    <input type="text" />
                    <input type="text" />
                    <input type="text" />

                    <select></select>

                    <div className={classes.QuizCreator__formControls}>
                        <Button type="primary" onClick={addQuestionHandler}>Add question</Button>
                        <Button type="success" onClick={createQuizHandler}>Create quiz</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default QuizCreator;
