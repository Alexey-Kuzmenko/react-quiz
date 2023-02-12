import React, { Component } from "react";
import classes from './Layout.module.scss'
import MenuToggle from "../../components/Nav/MenuToggle/MenuToggle";
import Drawer from "../../components/Nav/Drawer/Drawer";
import { Outlet } from "react-router-dom";

class Layout extends Component {
    state = {
        menuIsOpen: false
    }

    onMenuToggleClickHandler = (e) => {
        this.setState({ menuIsOpen: !this.state.menuIsOpen });
    }

    menuCloseMenuHandler = (e) => {
        this.setState({ menuIsOpen: false });
    }

    render() {
        return (
            <div className={classes.Layout}>

                <Drawer isOpen={this.state.menuIsOpen} onCloseMenu={this.menuCloseMenuHandler} />

                <MenuToggle isOpen={this.state.menuIsOpen} onMenuToggleClick={this.onMenuToggleClickHandler} />

                <main>
                    <Outlet />
                </main>
            </div>
        );
    }
}

export default Layout;