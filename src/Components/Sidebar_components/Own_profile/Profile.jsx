import React from 'react';
import style from './Profile.module.css'
import Myinfo from "./Myinfo/Myinfo";
import Wall from "./Wall/Wall";

const Profile = (props) => {
    return (
        <div className={style.wrapper}>
            <Myinfo/>
            <Wall store={props.store} />
        </div>
    );
};

export default Profile;