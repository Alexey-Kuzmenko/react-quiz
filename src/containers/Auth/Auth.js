import Button from "../../components/UI/Button/Button";
import classes from "./Auth.module.scss"

function Auth() {
    const singInHandler = ({ target }) => {
        console.log(target);
    }

    const registerHandler = ({ target }) => {
        console.log(target);
    }

    const onFormSubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className={classes.Auth}>
            <form className={classes.Auth__form} onSubmit={onFormSubmitHandler}>
                <h1 className={classes.Auth__title}>Login</h1>
                <input type="text" className={classes.Auth__formInput} />
                <input type="text" className={classes.Auth__formInput} />

                <div className={classes.Auth__formControls}>
                    <Button type="success" onClick={singInHandler}>Sign in</Button>
                    <Button type="primary" onClick={registerHandler}>Create account</Button>
                </div>

            </form>
        </div>
    );
}

export default Auth;