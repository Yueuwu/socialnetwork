import React from 'react';
import style from './Wall.module.css'
import PostsContainer from "./Posts/PostsContainer";

const Wall = () => {
    return (
            <div className={style.wall}>
                <div className={style.posts}>
                    <PostsContainer/>
                </div>
            </div>
    );
};

export default Wall;