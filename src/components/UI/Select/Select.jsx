import classes from "./Select.module.scss"

function Select({ label, value, onChangeHandler, options }) {
    const htmlFor = `${label}-${Math.floor(Math.random() * 1000)}`
    const renderOptions = (options) => {
        return options.map(({ value, text }, i) => {
            return (
                <option value={value} key={`value${i}`}>{text.toUpperCase()}</option>
            )
        })
    }

    return (
        <div className={classes.Select}>
            <label htmlFor={htmlFor} className={classes.Select__label}>{label.toUpperCase()}</label>
            <select
                id={htmlFor}
                value={value}
                onChange={onChangeHandler}
                className={classes.Select__body}
            >
                {renderOptions(options)}
            </select>
        </div>
    );
}

export default Select;