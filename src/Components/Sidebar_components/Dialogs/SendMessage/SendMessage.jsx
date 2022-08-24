import React from 'react';
import style from './SendMessage.module.css'

const SendMessage = () => {
    const sendMessage = (e) => {
        let text = e.target.value;
        console.log(text);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.inputWrap}>
                <input
                    className={style.input}
                    onInput={sendMessage}
                />
            </div>
            <button
                className={style.btn}

            >Send</button>
        </div>
    );
};

export default SendMessage;