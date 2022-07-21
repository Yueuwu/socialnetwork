import React from 'react';
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";

const Dialogs = (props) => {
    let dialogsData = props.dialogs
    let ges = ['hui', 'nehui', 'opa', 'dagnropa', 'hui', 'nehui', 'opa', 'dagnropa', 'hui', 'nehui', 'opa', 'dagnropa', 'hui', 'nehui', 'opa', 'dagnropa', 'hui', 'nehui', 'opa', 'dagnropa', 'hui', 'nehui', 'opa', 'dagnropa']
    return (
        <div className={style.dialogs}>
            <div className={style.di}>
                {dialogsData.map(el => <Dialog name={el.name} id={el.id}/>)}
            </div>
            <div className={style.mes}>
                {ges.map(m => <Message message={m}/>)}

            </div>
        </div>
    );
};

export default Dialogs;