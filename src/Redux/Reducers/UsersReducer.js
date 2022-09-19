const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 20
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.fetchedUsers]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId: userId}) //here might be baga
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (fetchedUsers) => ({type: SET_USERS, fetchedUsers: fetchedUsers})
export const setPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export default usersReducer