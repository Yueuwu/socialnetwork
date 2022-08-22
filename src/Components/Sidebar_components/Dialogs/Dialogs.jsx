import React from 'react';
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";
import SendMessage from "./SendMessage/SendMessage";

const Dialogs = (props) => {
    let dialogsData = props.dialogs.dialogsData;
    let messages = props.dialogs.messages;
    return (
        <div className={style.dialogs}>
            <div className={style.di}>
                {dialogsData.map(el => <Dialog name={el.name} id={el.id}/>)}
            </div>
            <div className={style.mes}>
                {messages.map(m => <Message message={m.message}/>)}
            </div>
            <div>
                <SendMessage/>
            </div>
        </div>
    );
};

export default Dialogs;