import React from 'react';
import Style from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => { //Хранятся данные о диалогах 



    return (
        <StoreContext.Consumer>
        {
            store => {
                let state = store.getState().dialogsPage;
                // let newMessageElement = React.createRef();

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }
                return (
                    <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                        dialogsPage={state} />
                )

            }

        }
        </StoreContext.Consumer>

    )
}

export default DialogsContainer;