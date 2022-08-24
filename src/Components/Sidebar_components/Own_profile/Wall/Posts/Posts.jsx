import React from 'react';
import style from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
    const addPost = (e) => {
        let text = e.target.value;
        props.addPost(text)
    }

    return (
        <div>
        <div className={style.add}>
            <div className={style.inputWrap}>
                <div className={style.typesome}>Write something</div>
                <input onInput={addPost} className={style.input}/>
                <div className={style.btnWrap}>
                    <button  className={style.btn}>Post</button>
                </div>
            </div>
        </div>
        <div className={style.postsWrap}>
                {props.posts.map(p => <Post post={p}/>)}
        </div>
        </div>
    );
};
export default Posts;