import React from 'react';
import style from './Wall.module.css'
import PostsContainer from "./Posts/PostsContainer";

const Wall = (props) => {
    return (
            <div className={style.wall}>
                <div className={style.posts}>
                    <PostsContainer store={props.store} />
                </div>
            </div>
    );
};

export default Wall;