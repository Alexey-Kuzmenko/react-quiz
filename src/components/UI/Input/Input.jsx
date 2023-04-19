import classes from "./Input.module.scss"

function isValid({ valid, touched, shouldValidate }) {
    return !valid && shouldValidate && touched
}

function Input({ value, type, label, onChangeHandler, validation }) {
    const inputType = type || "text"
    const cls = [classes.Input]
    const htmlFor = `${type}-${Math.floor(Math.random() * 1000)}`

    if (isValid(validation)) {
        cls.push(classes.Input_invalid)
    }

    return (
        <div className={classes.Input__container}>
            <label htmlFor={htmlFor} className={classes.Input__label}>{label.toUpperCase()}</label>
            <input
                type={inputType}
                id={htmlFor}
                className={cls.join(' ')}
                value={value}
                onChange={onChangeHandler}
            />
            {
                !isValid(validation)
                    ?
                    null
                    :
                    <span className={classes.Input__errorMessage}>{validation.errorMessage}</span>
            }
        </div>
    );
}

export default Input;