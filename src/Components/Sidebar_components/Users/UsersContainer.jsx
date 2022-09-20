import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../../Redux/Reducers/UsersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage: (page) => {
            dispatch(setPageAC(page))
        },
        setTotalCount: (totalUsersCount) => {
            dispatch(setTotalCountAC(totalUsersCount))
        }
    }
}
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;