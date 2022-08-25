import React from 'react';
import style from './SendMessage.module.css'

const SendMessage = (props) => {
    let newText = React.createRef();
    const addMessage = () => {
        let text = newText.current.value;
        props.addMessage(text);

    }

    return (
        <div className={style.wrapper}>
            <div className={style.inputWrap}>
                <input
                    className={style.input}
                    ref={newText}
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