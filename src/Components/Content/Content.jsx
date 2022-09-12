import React from 'react';
import style from './Content.module.css';
import {Routes, Route } from "react-router-dom";
import Profile from "../Sidebar_components/Own_profile/Profile";
import DialogsContainer from "../Sidebar_components/Dialogs/DialogsContainer";

const Content = (props) => {
        return (
            <div className={style.content}>
                <Routes>
                    <Route path='/profile' element={<Profile store={props.store}/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>
                </Routes>
            </div>
    );
};

export default Content;