import React from 'react';
import style from './Content.module.css';
import {Routes, Route } from "react-router-dom";
import Dialogs from "../Sidebar_components/Dialogs/Dialogs";
import Profile from "../Sidebar_components/Own_profile/Profile";

const Content = (props) => {
        return (
            <div className={style.content}>
                <Routes>
                    <Route path='/profile' element={<Profile updateNewPostText={props.updateNewPostText} addPost={props.addPost} state={props.state}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs updateNewMessageText={props.updateNewMessageText} addMessage={props.addMessage} state={props.state}/>}/>
                </Routes>
            </div>
    );
};

export default Content;