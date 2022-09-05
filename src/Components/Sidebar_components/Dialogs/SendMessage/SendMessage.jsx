import React from 'react';
import style from './SendMessage.module.css'
import {addMessageActionCreator, updateMessageActionCreator} from "../../../../Redux/State";

const SendMessage = (props) => {
    const addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    const updateText = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageActionCreator(text))
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
                <button
                    className={style.btn}
                    onClick={addMessage}
                >Send</button>
            </div>
    );
};

export default SendMessage;