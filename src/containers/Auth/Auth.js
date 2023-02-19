import { useState } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import classes from "./Auth.module.scss"
import is from "../../../node_modules/is_js/is"

function Auth() {
    const [formControls, setFormControls] = useState(
        {
            email: {
                value: "",
                type: "email",
                label: "email",
                validation: {
                    shouldValidate: true,
                    errorMessage: "Invalid email",
                    valid: false,
                    touched: false,
                    rules: {
                        required: true,
                        email: true
                    }

                }
            },
            password: {
                value: "",
                type: "password",
                label: "password",
                validation: {
                    shouldValidate: true,
                    errorMessage: "Invalid password",
                    valid: false,
                    touched: false,
                    rules: {
                        required: true,
                        minLength: 6
                    }
                }
            }
        }
    );

    const singInHandler = ({ target }) => {
        console.log(target);
    }

    const registerHandler = ({ target }) => {
        console.log(target);
    }

    const onFormSubmitHandler = (e) => {
        e.preventDefault()
    }

    const validateInputValue = (inputValue, config) => {
        if (!config) {
            return true
        }

        let isValid = true

        if (config.required) {
            isValid = inputValue.trim() !== "" && isValid
        }

        if (config.email) {
            isValid = is.email(inputValue) && isValid
        }

        if (config.minLength) {
            isValid = inputValue.trim().length >= config.minLength && isValid
        }

        return isValid
    }

    const onInputChangeHandler = ({ target }, controlsName) => {
        const formControlsCopy = { ...formControls }
        const control = { ...formControlsCopy[controlsName] }

        control.value = target.value
        control.validation.touched = true
        control.validation.valid = validateInputValue(target.value, control.validation.rules)

        formControlsCopy[controlsName] = control
        setFormControls(formControlsCopy)
    }

    const renderInputs = (controls) => {
        return Object.values(controls).map((inputControls, i) => {
            return (
                <Input
                    key={i}
                    value={inputControls.value}
                    type={inputControls.type}
                    label={inputControls.label}
                    onChangeHandler={(e) => onInputChangeHandler(e, inputControls.type)}
                    validation={inputControls.validation}
                />
            )
        })
    }

    return (
        <div className={classes.Auth}>
            <form className={classes.Auth__form} onSubmit={onFormSubmitHandler}>
                <h1 className={classes.Auth__title}>Login</h1>
                {renderInputs(formControls)}

                <div className={classes.Auth__formControls}>
                    <Button type="success" onClick={singInHandler}>Sign in</Button>
                    <Button type="primary" onClick={registerHandler}>Create account</Button>
                </div>

            </form>
        </div>
    );
}

export default Auth;