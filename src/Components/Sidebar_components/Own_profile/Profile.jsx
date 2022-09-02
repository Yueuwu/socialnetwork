import React from 'react';
import style from './Profile.module.css'
import Myinfo from "./Myinfo/Myinfo";
import Wall from "./Wall/Wall";

const Profile = (props) => {
    return (
        <div className={style.wrapper}>
            <Myinfo/>
            <Wall dispatch={props.dispatch} state={props.state}/>
        </div>
    );
};

export default Profile;