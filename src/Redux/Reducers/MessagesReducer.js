const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let initialState = {
    messages: [
        {id: 1, message: 'hui'},
        {id: 2, message: 'nehui'},
        {id: 3, message: 'opa'},
        {id: 4, message: 'dagnropa'}
    ],
    newMessageText: ''
}

const messagesReducer = (state /*= initialState*/, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageText;
            if(body.trim() !== '') {
                state.messages.unshift({
                    id: Date.now(),
                    message: body
                });
                state.newMessageText = '';
            }
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default: return state
    }
}
export default messagesReducer;