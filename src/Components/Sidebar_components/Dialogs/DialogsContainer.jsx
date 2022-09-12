import React from 'react';
import Dialogs from "./Dialogs";
import {addPostActionCreator} from "../../../Redux/Reducers/PostsReducer";
import {addMessageActionCreator, updateMessageActionCreator} from "../../../Redux/Reducers/MessagesReducer";

const DialogsContainer = (props) => {
    let dialogsData = props.store.getState().messagesReducer.dialogsData;
    let messages = props.store.getState().messagesReducer.messages;
    let newMessageText = props.store.getState().messagesReducer.newMessageText;
    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    const updateText = (text) => {
        props.store.dispatch(updateMessageActionCreator(text))
    }
    return (
        <>
            <Dialogs updateText={updateText} addMessage={addMessage} newMessageText={newMessageText} messages={messages} dialogsData={dialogsData}/>
        </>
    );
};

export default DialogsContainer;