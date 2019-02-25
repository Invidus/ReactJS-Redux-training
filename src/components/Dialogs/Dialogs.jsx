import React from 'react';
import Style from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'



const Dialogs = (props) => { //Хранятся данные о диалогах 
    // let dialogs = [{ id: 1, name: 'Alex' },
    // { id: 2, name: 'Sasha' }, { id: 3, name: 'Vasya' },
    // { id: 4, name: 'Nomad' }, { id: 5, name: 'Andrey' }]

    let messages = [{ id: 1, message: 'Hi' },
    { id: 2, message: 'Whaaat?' }, { id: 3, message: 'where are you?' },
    { id: 4, message: 'Google' }, { id: 5, message: 'Playing with dog' }]

    let dialogsElements = dialogs // Обработка диалогов с сервера
    .map( d => <DialogItem name = { d.name } id = { d.id } />);
 
    let messageElements = messages // Обработка сообщений с сервера
    .map(message => <Message message={message.message} />);
    return (

        <div className={Style.dialogs}>
            <div className={Style.dialogsItems}> {/* Вывод данных о диалогах */}
                {dialogsElements}
            </div>
            <div className={Style.messages}>
                {messageElements}
            </div>
        </div>

    )
}

export default Dialogs;