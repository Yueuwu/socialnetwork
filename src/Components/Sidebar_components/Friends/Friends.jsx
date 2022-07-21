import React from 'react';
import Friend from './Friend/Friend';
import style from './Friends.module.css'

const Friends = (props) => {
    return (
        <div className={style.wrapper}>
            <div>
                <h2>Friends</h2>
            </div>
            <div className={style.persons}>
                {props.persons.map(e => <Friend/>)}
            </div>
        </div>
    );
};

export default Friends;