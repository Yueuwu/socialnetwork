const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, body: "It is my first post!!!", likes: 1010},
        {id: 2,body: "It is my second post :)))))", likes: 9800},
        {id: 3,body: "It is my third post!!! ;))", likes: 87000},
        {id: 4,body: "Sad :(", likes: 910000},
        {id: 5,body: "Cucumber is so nice in my ass!", likes: 9999999}
    ],
    newPostText: ''
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: Date.now(),
                body: state.newPostText,
                likes: 0
            };
            if (newPost.body.trim() !== '') {
                return {
                    posts: [newPost, ...state.posts],
                    newPostText: ''
                }
            }
            else return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default: return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text})

export default postsReducer;