const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {id: 1, followed: true, name: 'Vera', status: 'I am a lash maker', location: { city: 'Quebec', country: 'Canada'}, photos: {small: 'https://sun9-53.userapi.com/impg/KVRBvCSLQQyT3rDAmrv4w-ZNuqC5Q_GfwlvyNg/_CJu3zmdMQg.jpg?size=1468x1600&quality=95&sign=c163bdddaad1c55312f90bb0fc1161d0&type=album'} },
        {id: 2, followed: false, name: 'Vladimir', status: 'I am a good guy', location: { city: 'Kiev', country: 'Ukraine'}, photos: {small: null} },
        {id: 3, followed: false, name: 'Vladimir', status: 'I am not a killer (lie)', location: { city: 'Moscow', country: 'Russia'}, photos: {small: null} },
        {id: 4, followed: false, name: 'Dmitry', status: 'Just better teacher', location: { city: 'Minsk', country: 'Belarus'}, photos: {small: null} },
    ],
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
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId: userId}) //here might be baga
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (fetchedUsers) => ({type: SET_USERS, fetchedUsers: fetchedUsers})

export default usersReducer