import React from 'react';
import style from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
    let newText = React.createRef();
    const addPost = () => {
        let text = newText.current.value;
        props.addPost(text);

    }

    return (
        <div>
        <div className={style.add}>
            <div className={style.inputWrap}>
                <div className={style.typesome}>Write something</div>
                <input ref={newText} className={style.input}/>
                <div className={style.btnWrap}>
                    <button onClick={addPost}  className={style.btn}>Post</button>
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