import React from 'react';
import style from './SendMessage.module.css'

const SendMessage = (props) => {
    const addMessage = () => {
        props.addMessage();
    }
    const updateText = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.inputWrap}>
                <input
                    autoFocus
                    className={style.input}
                    onChange={updateText}
                    value={props.newMessageText}
                />
            </div>
            <button
                className={style.btn}
                onClick={addMessage}
            >Send</button>
        </div>
    );
};

export default SendMessage;