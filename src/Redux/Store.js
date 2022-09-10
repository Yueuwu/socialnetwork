import {combineReducers, legacy_createStore as createStore} from "redux";
import postsReducer from "./Reducers/PostsReducer";
import messagesReducer from "./Reducers/MessagesReducer";

let reducers = combineReducers({
    postsReducer,
    messagesReducer
})

let store = createStore(reducers);

export default store;