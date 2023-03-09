import { useState } from "react";
import classes from "./QuizCreator.module.scss"
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { FormControls, validateInputValue, validateForm } from "../../form/fromFramework";
import Select from "../../components/UI/Select/Select";
import Quiz from "../../quiz/quiz";
import store from "../../store/store";

// * input controls
function createOptionControls(number) {
    const addAnswerInputControls = new FormControls("text", `answer ${number}`, true, true, "This value is required")
    addAnswerInputControls.id = number
    return addAnswerInputControls
}

function createFormControls() {
    const addQuestionInputControls = new FormControls("text", "enter a question", true, true, "This field can't be empty")

    return {
        question: addQuestionInputControls,
        option1: createOptionControls(1),
        option2: createOptionControls(2),
        option3: createOptionControls(3),
        option4: createOptionControls(4),
    }
}

function QuizCreator() {
    const [quiz, setQuiz] = useState([]);
    const [rightAnswerId, setRightAnswerId] = useState(1);
    const [isFormValid, setIsFormValid] = useState(false);
    const [formControls, setFormControls] = useState(createFormControls());

    const onFormSubmitHandler = (e) => {
        e.preventDefault()
    }

    const addQuestionHandler = (e) => {
        e.preventDefault()
        const quizCopy = [...quiz]
        const index = quizCopy.length + 1
        const answers = Object.values(formControls).splice(1)
        const questionItem = new Quiz(formControls.question.value, rightAnswerId, index, answers)

        quizCopy.push(questionItem)
        setQuiz(quizCopy)
        setFormControls(createFormControls())
        setRightAnswerId(1)
    }

    const createQuizHandler = async (e) => {
        e.preventDefault()
        // ! debug
        console.log(quiz);
        try {
            await store.sendQuizzes(quiz)
            setQuiz([])
        } catch (error) {
            console.error(error);
        }

    }

    const onInputChangeHandler = (value, controlName) => {
        const formControlsCopy = { ...formControls }
        const control = formControlsCopy[controlName]

        control.setValue(value)
        control.setTouched(true)
        control.setValid(validateInputValue(value, control.validation.rules))

        formControlsCopy[controlName] = control

        setIsFormValid(validateForm(formControlsCopy))
        setFormControls(formControlsCopy)
    }

    const onSelectChangeHandler = ({ target }) => {
        console.log(target.value);
        setRightAnswerId(+target.value)
    }

    const renderInputs = () => {
        return Object.keys(formControls).map((controlName, i) => {
            const { value, type, label, validation } = formControls[controlName]
            return (
                <Input
                    key={i}
                    value={value}
                    type={type}
                    label={label}
                    onChangeHandler={(e) => onInputChangeHandler(e.target.value, controlName)}
                    validation={validation}
                />
            )
        })
    }

    return (
        <div className={classes.QuizCreator}>
            <div className={classes.QuizCreator__innerFlexContainer}>
                <h1 className={classes.QuizCreator__title}>Create quiz</h1>
                <form className={classes.QuizCreator__form} onSubmit={onFormSubmitHandler}>

                    {renderInputs()}

                    <Select
                        label='Choose correct answer'
                        value={rightAnswerId}
                        options={[{ value: 1, text: "1" }, { value: 2, text: "2" }, { value: 3, text: "3" }, { value: 4, text: "4" }]}
                        onChangeHandler={onSelectChangeHandler}
                    />

                    <div className={classes.QuizCreator__formControls}>
                        <Button type="primary" onClick={addQuestionHandler} disabled={!isFormValid}>Add question</Button>
                        <Button type="success" onClick={createQuizHandler} disabled={!quiz.length}>Create quiz</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default QuizCreator;
