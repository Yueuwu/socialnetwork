import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageActionCreator} from "../../../Redux/Reducers/MessagesReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesReducer.dialogsData,
        newMessageText: state.messagesReducer.newMessageText,
        messages: state.messagesReducer.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => {
            dispatch(updateMessageActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;