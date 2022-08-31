import React from 'react';
import style from './Sidebar.module.css'
import {Link} from "react-router-dom";
import Friends from "../Sidebar_components/Friends/Friends";

const Sidebar = (props) => {
    return (
        <div className={style.bar}>
            <div className={style.wrap}>
                <div className={style.el}>
                    <Link className={style.el} to="/profile">
                        <img className={style.imgs} src="https://cdn-icons-png.flaticon.com/512/3024/3024605.png" alt=""/>
                    </Link>
                </div>
                <div className={style.el}>
                    <Link className={style.el} to="/dialogs/">
                        <img className={style.imgs} src="https://cdn-icons-png.flaticon.com/512/134/134808.png" alt=""/>
                    </Link>
                </div>
                <div className={style.el}>
                    <Friends persons={props.state}/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;