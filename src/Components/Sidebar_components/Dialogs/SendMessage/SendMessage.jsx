import React from 'react';
import style from './SendMessage.module.css'

const SendMessage = (props) => {
    const addMessage = () => {
        props.addMessage()
    }
    const updateText = (e) => {
        let text = e.target.value;
        props.updateText(text)
    }
    const keyPress = (e) => {
        if(e.keyCode === 13){
            addMessage()
        }
    }

    return (
            <div className={style.wrapper}>
                <div className={style.inputWrap}>
                    <input
                        autoFocus
                        className={style.input}
                        onChange={updateText}
                        value={props.newMessageText}
                        onKeyDown={keyPress}
                    />
                </div>
                <p className={style.line}></p>
                <button
                    className={style.btn}
                    onClick={addMessage}
                >Send</button>
            </div>
    );
};

export default SendMessage;