import classes from "./Drawer.module.scss"
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavLinks from "../NavLinks/NavLinks";
import { useSelector } from "react-redux";

function Drawer({ isOpen, onCloseMenu }) {
    const token = useSelector(state => state.logout.token)

    const cls = [classes.Drawer]

    if (!isOpen) {
        cls.push(classes.Drawer_close)
    }

    const links = []

    if (!token) {
        links.push({ label: 'login', path: '.' })
    } else {
        links.push({ label: 'quiz list', path: '.' })
        links.push({ label: 'quiz creator', path: 'quiz-creator' })
        links.push({ label: 'logout', path: 'logout' })
    }

    return (
        <>
            <nav className={cls.join(' ')}>
                <div className={classes.menu}>
                    <ul className={classes.menu__list}>
                        <NavLinks menuItemClass={classes.menu__listItem} onCloseMenu={onCloseMenu} links={links} />
                    </ul>
                </div>
            </nav>
            {isOpen ? <Backdrop onClickHandler={onCloseMenu} /> : null}
        </>
    );
}

export default Drawer;