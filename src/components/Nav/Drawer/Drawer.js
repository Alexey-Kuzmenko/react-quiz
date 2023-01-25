import React, { Component } from "react";
import classes from "./Drawer.module.scss"
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

// const links = ['.', 'auth', 'quiz-creator', 'quiz/:id',]
const links = [{ label: 'home', path: '.' }, { label: 'quiz creator', path: 'quiz-creator' }, { label: 'quiz', path: 'quiz/:id' },]

class Drawer extends Component {
    constructor(props) {
        super(props);
    }

    static setActive = ({ isActive }) => isActive ? `${classes.menu__link} ${classes.menu__link_active}` : `${classes.menu__link}`

    renderLinks(links) {
        return links.map(({ label, path }, index) => {
            return (
                <li className={classes.menu__listItem} key={index}>
                    <NavLink to={path} className={Drawer.setActive} onClick={this.props.onCloseMenu}>{label.toUpperCase()}</NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer]
        if (!this.props.isOpen) {
            cls.push(classes.Drawer_close)
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <div className={classes.menu}>
                        <ul className={classes.menu__list}>
                            {this.renderLinks(links)}
                        </ul>
                    </div>
                </nav>
                {this.props.isOpen ? <Backdrop onClickHandler={this.props.onCloseMenu} /> : null}
            </React.Fragment>
        );
    }
}

export default Drawer;