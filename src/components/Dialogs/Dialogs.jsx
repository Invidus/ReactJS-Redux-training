import React from 'react';
import Style from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => { // Name in da message
    return (
        <div className={Style.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return(
        <div className={Style.message}>
                    {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (

        <div className={Style.dialogs}>
            <div className={Style.dialogsItems}>
                <DialogItem name = "Alex" id = "1"/>
                <DialogItem name = "Sasha" id = "2"/>
                <DialogItem name = "Vasya" id = "3"/>
                <DialogItem name = "Nomad" id = "4"/>
                <DialogItem name = "Andrey" id = "5"/>
            </div>
            <div className={Style.messages}>
                <Message message = "Hi"/>
                <Message message = "What's up  "/>
                <Message message = "Nani?"/>
            </div>
        </div>

    )
}

export default Dialogs;