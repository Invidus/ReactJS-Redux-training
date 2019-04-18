const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SETUSERS = 'SETUSERS';

let initialState = {
    users: [
  
    ],

}
//само действие
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: // возвращение true followed
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SETUSERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default: return state;

    }
}
// Приход инфы о действии
export const followAC = (userId) => ({ type: FOLLOW, userId })

export const unfollowAC = (userId) => ({
    type: UNFOLLOW, userId
})
export const setUsersAC = (users) => ({ type: SETUSERS, users })

export default usersReducer