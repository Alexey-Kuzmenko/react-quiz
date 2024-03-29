import { useState } from "react";
import classes from './Layout.module.scss'
import MenuToggle from "../../components/Nav/MenuToggle/MenuToggle";
import Drawer from "../../components/Nav/Drawer/Drawer";
import { Outlet } from "react-router-dom";

const body = document.body

function Layout() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    body.dataset.bodyScroll = !menuIsOpen

    const onMenuToggleClickHandler = (e) => {
        setMenuIsOpen(!menuIsOpen)
    }

    const menuCloseMenuHandler = (e) => {
        setMenuIsOpen(false)
    }

    return (
        <div className={classes.Layout}>

            <Drawer isOpen={menuIsOpen} onCloseMenu={menuCloseMenuHandler} />

            <MenuToggle isOpen={menuIsOpen} onMenuToggleClick={onMenuToggleClickHandler} />

            <main style={{ position: "relative" }}>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;