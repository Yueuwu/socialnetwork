import React from 'react';
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";
import SendMessage from "./SendMessage/SendMessage";

const Dialogs = (props) => {

    let messages = props.messages;
    return (
        <div className={style.dialogs}>
            <div className={style.di}>
                {props.dialogsData.map(el => <Dialog name={el.name} id={el.id}/>)}
            </div>
            <div className={style.mes}>
                {messages.map(m => <Message message={m.message}/>)}
            </div>
            <div className={style.send}>
                <SendMessage updateText={props.updateText} addMessage={props.addMessage} newMessageText={props.newMessageText}/>
            </div>
        </div>
    );
};

export default Dialogs;