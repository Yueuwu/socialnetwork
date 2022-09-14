import {connect} from "react-redux";
import Sidebar from "./Sidebar";

let mapStateToProps = (state) => {
    return {
        state: state.messagesReducer.dialogsData,
    }
}
const  SidebarContainer = connect(mapStateToProps)(Sidebar)

export default SidebarContainer;