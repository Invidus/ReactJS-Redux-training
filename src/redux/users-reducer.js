const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';

let initialState = {
    users: [
        { id: 1, followed: true, fullName: 'Ivan', status: 'badboy', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, followed: false, fullName: 'Mihail', status: 'friendly', location: { city: 'Moscow', country: 'Russia' } },
    ],

}
//само действие
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            let stateCopy = {
                ...state,
                users: state.users.map(callbackfn u => {
                    return u;
                })
            }
        case UNFOLLOW:

        default: return state;

    }
}
// Приход инфы о действии
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({
    type: UNFOLLOW, userId
})
export default usersReducer