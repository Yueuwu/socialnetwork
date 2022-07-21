import React from 'react';
import style from './Content.module.css';
import {Routes, Route } from "react-router-dom";
import Dialogs from "../Sidebar_components/Dialogs/Dialogs";
import Profile from "../Sidebar_components/Own_profile/Profile";

const Content = (props) => {
    return (
            <div className={style.content}>
                <Routes>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs}/>}/>
                </Routes>
            </div>
    );
};

export default Content;