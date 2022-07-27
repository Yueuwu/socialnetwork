import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.body}>
                {props.post.body}
            </div>
            <div className={style.likesWrap}>
                <div className={style.likes}>
                    {props.post.likes}
                </div>
            </div>
        </div>
    );
};

export default Post;