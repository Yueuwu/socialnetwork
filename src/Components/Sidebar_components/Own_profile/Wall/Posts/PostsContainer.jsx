import React from 'react';
import Posts from "./Posts";
import {addPostActionCreator, updateTextActionCreator} from "../../../../../Redux/Reducers/PostsReducer";
import {connect} from "react-redux";

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