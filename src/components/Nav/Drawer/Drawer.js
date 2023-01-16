import React, { Component } from "react";
import classes from "./Drawer.module.scss"
import Backdrop from "../../UI/Backdrop/Backdrop";


const links = [1, 2, 3, 4]

class Drawer extends Component {
    constructor(props) {
        super(props);
    }

    static renderLinks(links) {
        return links.map((link, index) => {
            return (
                <li className={classes.menu__listItem} key={index}>
                    <a href="#" className={classes.menu__link}>Link{link}</a>
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
                            {Drawer.renderLinks(links)}
                        </ul>
                    </div>
                </nav>
                {this.props.isOpen ? <Backdrop onClickHandler={this.props.onCloseMenu} /> : null}
            </React.Fragment>
        );
    }
}

export default Drawer;