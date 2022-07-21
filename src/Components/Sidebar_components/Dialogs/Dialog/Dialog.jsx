import React from 'react';
import {Link} from "react-router-dom";
import style from './Dialog.module.css'

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.wrapper}>
            <Link className={style.item} to={path}>
                <div>
                    <img className={style.ava} src="https://cdn-icons-png.flaticon.com/512/2489/2489278.png" alt=""/>
                </div>
                <strong>
                    {props.name}
                </strong>
            </Link>
        </div>
    );
};

export default Dialog;