import React from 'react';

const SendMessage = () => {
    const sendMessage = (e) => {
        let text = e.target.value;
    }
    return (
        <div>
            <input onInput={sendMessage}/>
            <button>Send</button>
        </div>
    );
};

export default SendMessage;