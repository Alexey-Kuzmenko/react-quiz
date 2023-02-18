import classes from "./Drawer.module.scss"
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavLinks from "../NavLinks/NavLinks";


const links = [{ label: 'home', path: '.' }, { label: 'quiz creator', path: 'quiz-creator' }, { label: 'quiz', path: 'quiz/:id' },]

function Drawer({ isOpen, onCloseMenu }) {

    const cls = [classes.Drawer]

    if (!isOpen) {
        cls.push(classes.Drawer_close)
    }

    return (
        <React.Fragment>
            <nav className={cls.join(' ')}>
                <div className={classes.menu}>
                    <ul className={classes.menu__list}>
                        <NavLinks menuItemClass={classes.menu__listItem} onCloseMenu={onCloseMenu} links={links} />
                    </ul>
                </div>
            </nav>
            {isOpen ? <Backdrop onClickHandler={onCloseMenu} /> : null}
        </React.Fragment>
    );
}

export default Drawer;