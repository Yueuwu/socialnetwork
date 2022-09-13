import React from 'react';
import Posts from "./Posts";
import {addPostActionCreator, updateTextActionCreator} from "../../../../../Redux/Reducers/PostsReducer";
import {connect} from "react-redux";


/*const PostsContainer = (props) => {
    let newPostText = props.store.getState().postsReducer.newPostText;
    let posts = props.store.getState().postsReducer.posts
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    const updateText = (text) => {
        props.store.dispatch(updateTextActionCreator(text))
    }
    return (<Posts posts={posts} newPostText={newPostText} addPost={addPost} updateText={updateText}/>);
};*/
let mapStateToProps = (state) => {
    return {
        posts: state.postsReducer.posts,
        newPostText: state.postsReducer.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateText: (text) => {
            dispatch(updateTextActionCreator(text))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;