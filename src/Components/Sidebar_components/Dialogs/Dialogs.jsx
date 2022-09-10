import React from 'react';
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";
import SendMessage from "./SendMessage/SendMessage";

const Dialogs = (props) => {
    let dialogsData = props.state.messagesReducer.dialogsData;
    let messages = props.state.messagesReducer.messages;
    return (
        <div className={style.dialogs}>
            <div className={style.di}>
                {dialogsData.map(el => <Dialog name={el.name} id={el.id}/>)}
            </div>
            <div className={style.mes}>
                {messages.map(m => <Message message={m.message}/>)}
            </div>
            <div className={style.send}>
                <SendMessage dispatch={props.dispatch} newMessageText={props.state.messagesReducer.newMessageText}/>
            </div>
        </div>
    );
};

export default Dialogs;