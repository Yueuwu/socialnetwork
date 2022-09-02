import React from 'react';
import style from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
    const addPost = () => {
        props.dispatch({type: 'ADD_POST'});
    }
    const updateText = (e) => {
        let text = e.target.value;
        props.dispatch({type: 'UPDATE_NEW_POST_TEXT', newText: text})
    }

    return (
        <div>
            <div className={style.add}>
                <div className={style.inputWrap}>
                    <div className={style.typesome}>Write something</div>
                    <input
                        onChange={updateText}
                        className={style.input}
                        value={props.state.profilePage.newPostText}
                    />
                    <div className={style.btnWrap}>
                        <button onClick={addPost} className={style.btn}>Post</button>
                    </div>
                </div>
            </div>
            <div className={style.postsWrap}>
                {props.state.profilePage.posts.map(p => <Post post={p}/>)}
            </div>
        </div>
    );
};
export default Posts;