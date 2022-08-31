import React from 'react';
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";
import SendMessage from "./SendMessage/SendMessage";

const Dialogs = (props) => {
    let dialogsData = props.state.dialogsData;
    let messages = props.state.messages;
    console.log('Dilaogs',props.newMessageText);
    return (
        <div className={style.dialogs}>
            <div className={style.di}>
                {dialogsData.map(el => <Dialog name={el.name} id={el.id}/>)}
            </div>
            <div className={style.mes}>
                {messages.map(m => <Message message={m.message}/>)}
            </div>
            <div className={style.send}>
                <SendMessage newMessageText={props.state.newMessageText} updateNewMessageText={props.updateNewMessageText} addMessage={props.addMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;