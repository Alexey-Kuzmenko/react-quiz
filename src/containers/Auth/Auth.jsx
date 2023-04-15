import { useState } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import classes from "./Auth.module.scss"
import { FormControls, validateInputValue, validateForm } from "../../form/fromFramework";
import AuthDataCreator from "../../authentication/auth";
import { useAuthUserMutation } from "../../store/authApi";
import { useDispatch } from "react-redux";
import { saveSession } from "../../store/logoutSlice"

function createFromControls() {
    const emailInputControl = new FormControls("email", "email", true, true, "Invalid email");
    emailInputControl.setRules({ email: true })
    const passwordInputControl = new FormControls("password", "password", true, true, "Invalid password");
    passwordInputControl.setRules({ minLength: 6 })

    return {
        email: emailInputControl,
        password: passwordInputControl
    }
}

function Auth() {
    const [formControls, setFormControls] = useState(createFromControls());
    const [isFromValid, setIsFromValid] = useState(false);
    const [authUser] = useAuthUserMutation()
    const dispatch = useDispatch()

    const singInHandler = async () => {
        const authData = new AuthDataCreator(formControls.email.value, formControls.password.value)
        // ! debug 
        console.log(authData);

        try {
            const response = await authUser({ body: authData, isLogin: true }).unwrap()
            const payload = await response

            // ! testing
            dispatch(saveSession({ tokenId: payload.idToken, userId: payload.localId, expiresIn: payload.expiresIn }))

            // ! debug
            console.log(payload)
            console.log(formControls.email.value)
            console.log(formControls.password.value)

            setFormControls(createFromControls())
        } catch (error) {
            console.error(error);
        }
    }

    const registerHandler = async () => {
        const authData = new AuthDataCreator(formControls.email.value, formControls.password.value)
        // ! debug 
        console.log(authData);

        try {
            const response = await authUser({ body: authData, isLogin: false }).unwrap()
            const payload = await response
            dispatch(saveSession({ tokenId: payload.idToken, userId: payload.localId, expiresIn: payload.expiresIn }))
            // ! debug
            console.log(payload)
            console.log(formControls.email.value)
            console.log(formControls.password.value)

            setFormControls(createFromControls())
        } catch (error) {
            console.error(error);
        }

    }

    const onFormSubmitHandler = (e) => {
        e.preventDefault()
    }

    const onInputChangeHandler = ({ target }, controlsName) => {
        const formControlsCopy = { ...formControls }
        const control = formControlsCopy[controlsName]

        control.setValue(target.value)
        control.setTouched(true)
        control.setValid(validateInputValue(target.value, control.validation.rules))

        formControlsCopy[controlsName] = control

        setIsFromValid(validateForm(formControlsCopy))
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
                    <Button type="success" onClick={singInHandler} disabled={!isFromValid}>Sign in</Button>
                    <Button type="primary" onClick={registerHandler} disabled={!isFromValid}>Create account</Button>
                </div>

            </form>
        </div>
    );
}

export default Auth;