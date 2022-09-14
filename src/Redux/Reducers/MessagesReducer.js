const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let initialState = {
    messages: [
        {id: 1, message: 'hui'},
        {id: 2, message: 'nehui'},
        {id: 3, message: 'opa'},
        {id: 4, message: 'dagnropa'}
    ],
    newMessageText: '',
    dialogsData: [
        {name: 'Vera', id:'Vera'},
        {name: 'Vlad', id:'Vlad'},
        {name: 'Sasha', id:'Sasha'},
        {name: 'Igor', id: 'Igor'},
        {name: 'Vova', id: 'Vova'},
        {name: 'Achyty', id: 'Achyty'},
        {name: 'Nastya', id: 'Nastya'},
        {name: 'Masha', id: 'Masha'},
    ],
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let body = state.newMessageText;
            if (body.trim() !== '') {
                return {
                    ...state,
                    newMessageText: '',
                    messages: [{id: Date.now(), message: body}, ...state.messages]
                }
            }
            else return state
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        }
        default: return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text
})

export default messagesReducer;