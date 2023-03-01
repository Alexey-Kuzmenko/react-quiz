import classes from "./Loader.module.scss"

function Loader() {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.Loader}>
                <div /><div />
            </div>
        </div>
    );
}

export default Loader;