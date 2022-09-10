import React from 'react';
import style from './Posts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateTextActionCreator} from "../../../../../Redux/Reducers/PostsReducer";




const Posts = (props) => {
    let addPost = () => {
        props.addPost()
    }
    let updateText = (e) => {
        let text = e.target.value;
        props.updateText(text)
    }
    const keyPress = (e) => {
        if(e.keyCode === 13){
            addPost()
        }
    }

    return (
        <div>
            <div className={style.add}>
                <div className={style.inputWrap}>
                    <div className={style.typesome}>Write something</div>
                    <input
                        onChange={updateText}
                        className={style.input}
                        value={props.newValue}
                        onKeyDown={keyPress}
                    />
                    <div className={style.btnWrap}>
                        <button onClick={addPost} className={style.btn}>Post</button>
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