import React from 'react';
import Style from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => { // Name in da message
    return (
        <div className={Style.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;