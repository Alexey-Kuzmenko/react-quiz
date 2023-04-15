import classes from './Button.module.scss'

function Button(props) {
    const cls = [classes.Button, classes[`Button_${props.type}`]]

    return (
        <button className={cls.join(' ')} onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </button>
    );
}

export default Button;