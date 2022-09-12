import React from 'react';
import Posts from "./Posts";
import {addPostActionCreator, updateTextActionCreator} from "../../../../../Redux/Reducers/PostsReducer";


const PostsContainer = (props) => {
    let newPostText = props.store.getState().postsReducer.newPostText;
    let posts = props.store.getState().postsReducer.posts
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    const updateText = (text) => {
        props.store.dispatch(updateTextActionCreator(text))
    }
    return (<Posts posts={posts} newPostText={newPostText} addPost={addPost} updateText={updateText}/>);
};
export default PostsContainer;