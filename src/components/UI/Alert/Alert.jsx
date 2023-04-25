import classes from "./Alert.module.scss"

function Alert({ text, type = "default", isShown = false, onClickHandler }) {
    const cls = [classes.Alert]

    if (isShown) {
        cls.push(classes.Alert_open)
    }

    const confirmAlert = (
        <i className="fa-regular fa-circle-check"></i>
    )

    const defaultAlert = (
        <>
            <i className="fa-regular fa-circle-check"></i>
            <i className="fa-solid fa-ban"></i>
        </>
    )

    return (
        <div className={cls.join(' ')}>
            <div className={classes.Alert__text}>
                {text}
            </div>
            <div className={classes.Alert__controls} onClick={onClickHandler}>
                {
                    type === "confirm" ? confirmAlert : defaultAlert
                }

            </div>
        </div>
    );
}

export default Alert;