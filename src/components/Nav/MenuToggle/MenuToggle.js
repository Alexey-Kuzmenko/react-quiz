import React from "react";
import classes from './MenuToggle.module.scss'

function MenuToggle({ isOpen, onMenuToggleClick }) {
    const cls = [classes.MenuToggle, 'fa']

    if (isOpen) {
        cls.push('fa-times')
        cls.push(classes.MenuToggle_open)
    } else {
        cls.push('fa-bars')
    }

    return (
        <i
            className={cls.join(' ')}
            onClick={onMenuToggleClick}
        />
    );
}

export default MenuToggle;