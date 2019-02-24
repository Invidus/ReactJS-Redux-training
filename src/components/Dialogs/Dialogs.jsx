import React from 'react';
import Style from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const Dialogs = () => {
    return (

        <div className={Style.dialogs}>
            <div className={Style.dialogsItems}>
                <div className={Style.dialog}>
                    <NavLink to="/dialogs/1">Alex</NavLink>
                </div>
                <div className={Style.dialog}>
                    <NavLink to="/dialogs/2">Ivan</NavLink>
                </div>
                <div className={Style.dialog}>
                    <NavLink to="/dialogs/3">Bob</NavLink>
                </div>
            </div>
            <div className={Style.messages}>
                <div className={Style.message}>
                    Hi
                </div>
                <div className={Style.message}>
                    what's up?
                </div>
                <div className={Style.message}>
                    i'm fine
                </div>
            </div>
        </div>

    )
}

export default Dialogs;