const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {id: 1, followed: true, name: 'Vera', about: 'I am a lash maker', location: { city: 'Quebec', country: 'Canada'}, photo: '' },
        {id: 2, followed: false, name: 'Vladimir', about: 'I am a good guy', location: { city: 'Kiev', country: 'Ukraine'}, photo: '' },
        {id: 3, followed: false, name: 'Vladimir', about: 'I am not a killer (lie)', location: { city: 'Moscow', country: 'Russia'}, photo: '' },
        {id: 4, followed: false, name: 'Dmitry', about: 'Just better teacher', location: { city: 'Minsk', country: 'Belarus'}, photo: '' },
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