import React from 'react';
import Style from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage
        
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody:(body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage:() => {
           dispatch(sendMessageCreator())
        },
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;