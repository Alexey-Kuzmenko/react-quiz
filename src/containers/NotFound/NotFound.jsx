import { Link } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import classes from "./NotFound.module.scss"

function NotFound() {
    return (
        <div className={classes.NotFound}>
            <h1 className={classes.NotFound__title}>Page not found</h1>
            <Link to=".." path="relative">
                <Button type="primary">go home</Button>
            </Link>
        </div>

    );
}

export default NotFound;