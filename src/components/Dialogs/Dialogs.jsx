import React from 'react';
import Style from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => { //Хранятся данные о диалогах 
      
    let dialogsElements = props.dialogs // Обработка диалогов с сервера
    .map( d => <DialogItem name = { d.name } id = { d.id } />);
 
    let messageElements = props.messages // Обработка сообщений с сервера
    .map(m => <Message message={m.message} />);
    return (

        <div className={Style.dialogs}>
            <div className={Style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={Style.messages}>
                {messageElements}
            </div>
        </div>

    )
}

export default Dialogs;