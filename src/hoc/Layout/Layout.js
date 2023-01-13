import React, { Component } from "react";
import classes from './Layout.module.scss'
import MenuToggle from "../../components/Nav/MenuToggle/MenuToggle";


class Layout extends Component {
    state = {
        menuIsOpen: false
    }

    onMenuToggleClickHandler = (e) => {
        this.setState({ menuIsOpen: !this.state.menuIsOpen });
    }

    render() {
        return (
            <div className={classes.Layout}>

                <MenuToggle isOpen={this.state.menuIsOpen} onMenuToggleClick={this.onMenuToggleClickHandler} />

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;