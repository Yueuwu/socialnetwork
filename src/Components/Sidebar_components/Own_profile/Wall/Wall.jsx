import React from 'react';
import style from './Wall.module.css'
import PostsContainer from "./Posts/PostsContainer";
import Posts from "./Posts/Posts";

const Wall = (props) => {
    return (
            <div className={style.wall}>
                <div className={style.posts}>
                    <Posts dispatch={props.dispatch} state={props.state}/>
                </div>
            </div>
    );
};

export default Wall;