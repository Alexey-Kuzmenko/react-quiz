import { useState } from "react";
import classes from "./QuizCreator.module.scss"
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import FormControls from "../../form/fromFramework";
import Select from "../../components/UI/Select/Select";

// * input controls
const addQuestionInputControls = new FormControls("text", "enter a question", true, true)
addQuestionInputControls.setErrorMessage("This field can't be empty")

function createOptionControls(number) {
    const addAnswerInputControls = new FormControls("text", `answer ${number}`, true, true)
    addAnswerInputControls.setErrorMessage("This value is required")
    addAnswerInputControls.id = number
    return addAnswerInputControls
}

// TODO: add function or reference which return basic controls (reset controls)

function QuizCreator() {
    const [quiz, setQuiz] = useState([]);
    const [rightAnswerId, setRightAnswerId] = useState(1);
    const [formControls, setFormControls] = useState(
        {
            question: addQuestionInputControls,
            option1: createOptionControls(1),
            option2: createOptionControls(2),
            option3: createOptionControls(3),
            option4: createOptionControls(4),
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

    const onInputChangeHandler = (value, controlName) => {
        console.log(value);
    }

    const onSelectChangeHandler = ({ target }) => {
        console.log(target.value);
        setRightAnswerId(+target.value)
    }

    const renderInputs = () => {
        return Object.keys(formControls).map((controlName, i) => {
            const { value, type, label, validation } = formControls[controlName]
            return (
                <>
                    <Input
                        key={i}
                        value={value}
                        type={type}
                        label={label}
                        onChangeHandler={(e) => onInputChangeHandler(e.target.value, controlName)}
                        validation={validation}
                    />
                    {i === 0 ? <hr /> : null}
                </>
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
                        label={'Label'}
                        value={rightAnswerId}
                        options={[{ value: 1, text: "first val" }, { value: 2, text: "second val" }, { value: 3, text: "last val" }]}
                        onChangeHandler={onSelectChangeHandler}
                    />

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
