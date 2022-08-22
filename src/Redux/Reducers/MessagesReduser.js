const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    messages: [
        {id: 1, message: 'hui'},
        {id: 2, message: 'nehui'},
        {id: 3, message: 'opa'},
        {id: 4, message: 'dagnropa'}
    ],
    newMessageBody: ''
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: Date.now(), message: body});
            state.newPostText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            return state;
        default: return state
    }
}
export default messagesReducer;