import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageActionCreator} from "../../../Redux/Reducers/MessagesReducer";
import {connect} from "react-redux";


/*const DialogsContainer = (props) => {
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
};*/

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesReducer.dialogsData,
        newMessageText: state.messagesReducer.newMessageText,
        messages: state.messagesReducer.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => {
            dispatch(updateMessageActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;