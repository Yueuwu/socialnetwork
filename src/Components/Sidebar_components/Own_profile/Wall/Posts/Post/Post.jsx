import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    let numberHandler = () => {
        if (props.post.likes > 9999999){
            props.post.likes = Math.trunc(props.post.likes / 1000000) + 'M'
        } else if (props.post.likes > 999999){
            props.post.likes = Math.trunc(props.post.likes / 1000000) + 'M'
        } else if (props.post.likes > 99999){
            props.post.likes = Math.trunc(props.post.likes / 1000) + 'K'
        } else if (props.post.likes > 9999){
            props.post.likes = Math.trunc(props.post.likes / 1000) + 'K'
        }
        props.post.likes = props.post.likes.toLocaleString()
        return props.post.likes
    }
    return (
        <div className={style.post}>
            <div className={style.body}>
                {props.post.body}
            </div>
            <div className={style.likesWrap}>
                <div className={style.imgWrap}>
                    <img className={style.img} src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt=""/>
                </div>
                <div className={style.likes}>
                    {numberHandler()}
                </div>
            </div>
        </div>
    );
};

export default Post;