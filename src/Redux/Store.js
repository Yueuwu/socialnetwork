import {combineReducers, legacy_createStore as createStore} from "redux";
import postsReducer from "./Reducers/PostsReducer";
import messagesReducer from "./Reducers/MessagesReducer";
import usersReducer from "./Reducers/UsersReducer";

let reducers = combineReducers({
    postsReducer,
    messagesReducer,
    usersReducer
})

let store = createStore(reducers);

export default store;