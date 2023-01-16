import React from "react";
import "./Backdrop.scss"

function Backdrop({ onClickHandler }) {
    return (
        <div className="Backdrop" onClick={onClickHandler}>

        </div>
    );
}

export default Backdrop;