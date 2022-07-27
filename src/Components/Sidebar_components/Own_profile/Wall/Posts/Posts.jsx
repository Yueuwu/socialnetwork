import React from 'react';
import style from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
    return (
        <div className={style.postsWrap}>
                {props.posts.map(p => <Post post={p}/>)}
        </div>
    );
};
export default Posts;