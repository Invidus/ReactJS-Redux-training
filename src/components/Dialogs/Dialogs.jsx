import React from 'react';
import Style from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => { //Хранятся данные о диалогах 
    
    let newMessageElement = React.createRef();
    
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    let dialogsElements = props.state.dialogs // Обработка диалогов с сервера
    .map( d => <DialogItem name = { d.name } id = { d.id } />);
 
    let messageElements = props.state.messages // Обработка сообщений с сервера
    .map(m => <Message message={m.message} />);
    return (

        <div className={Style.dialogs}>
            <div className={Style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={Style.messages}>
                {messageElements}
            </div>
            <div >
                <button onClick = { addMessage }> Send </button>
            </div>
            <div className = {Style.messages}>
                <textarea ref = {newMessageElement}></textarea>
            </div>
        </div>

    )
}

export default Dialogs;