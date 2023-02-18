import classes from "./NavLinks.module.scss"
import { NavLink } from "react-router-dom";

function NavLinks({ menuItemClass, onCloseMenu, links }) {
    const setActive = ({ isActive }) => isActive ? `${classes.NavLink} ${classes.NavLink__active}` : `${classes.NavLink}`
    return links.map(({ label, path }, index) => {
        return (
            <li className={menuItemClass} key={index}>
                <NavLink to={path} className={setActive} onClick={onCloseMenu}>{label.toUpperCase()}</NavLink>
            </li>
        )
    })
}

export default NavLinks;