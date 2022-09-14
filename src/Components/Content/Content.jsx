import React from 'react';
import style from './Content.module.css';
import {Routes, Route } from "react-router-dom";
import Profile from "../Sidebar_components/Own_profile/Profile";
import DialogsContainer from "../Sidebar_components/Dialogs/DialogsContainer";

const Content = () => {
        return (
            <div className={style.content}>
                <Routes>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                </Routes>
            </div>
    );
};

export default Content;