import React from 'react';
import Style from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialog-reducer';

const Dialogs = (props) => { //Хранятся данные о диалогах 

    let state = props.dialogsPage;
    // let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)

    }

    let dialogsElements = state.dialogs // Обработка диалогов с сервера
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messageElements = state.messages
        .map(m => <Message message={m.message} />);

    let newMessageBody = state.newMessageBody;

    return (

        <div className={Style.dialogs}>
            <div className={Style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={Style.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea
                        placeholder='Enter your message here!'
                        //  ref = {newMessageElement} 
                        value={newMessageBody}
                        onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessageClick}> Send </button></div>

                </div>
            </div>
        </div>

    )
}

export default Dialogs;