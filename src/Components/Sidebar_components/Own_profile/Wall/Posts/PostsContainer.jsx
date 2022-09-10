import React from 'react';
import Posts from "./Posts";
import {addPostActionCreator, updateTextActionCreator} from "../../../../../Redux/Reducers/PostsReducer";


const PostsContainer = (props) => {
    let newValue = props.state.postsReducer.newPostText
    let posts = props.state.postsReducer.posts
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    const updateText = (text) => {
        props.dispatch(updateTextActionCreator(text))
    }
    return (<Posts posts={posts} newValue={newValue} addPost={addPost} updateText={updateText}/>);
};
export default PostsContainer;