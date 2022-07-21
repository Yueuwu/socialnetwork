import React from 'react';
import style from './Message.module.css'

const Message = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.iconWrap}>
                <img className={style.icon} src="https://cdn-icons-png.flaticon.com/512/2489/2489278.png" alt=""/>
            </div>
            <div className={style.body}>
                {props.message}
            </div>
        </div>
    );
};

export default Message;