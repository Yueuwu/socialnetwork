import {combineReducers, createStore} from "redux";
import postsReducer from "./Reducers/PostsReducer";
import messagesReducer from "./Reducers/MessagesReduser";

let reducers = combineReducers({
    postsReducer,
    messagesReducer
})

let store = createStore(reducers);

export default store;