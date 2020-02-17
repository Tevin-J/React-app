const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
        users: [
            /*{id: 1, followed: false, photoUrl: 'https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
                fullname: 'Vasily', location: {city: 'Minsk', country: 'Belarus'}, status: 'I am Vasily'},
            {id: 2, followed: true, photoUrl: 'https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
                fullname: 'Stepan', location: {city: 'Moscow', country: 'Russia'}, status: 'I am Stepan'},
            {id: 3, followed: false, photoUrl: 'https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
                fullname: 'Timofey', location: {city: 'Kiev', country: 'Ukraine'}, status: 'I am Timofey'}*/
        ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return ({
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            })
        case UNFOLLOW:
            return ({
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            })
        case SET_USERS:
            return ({
                ...state, users: [...state.users, ...action.users]
            })
        default:
            return state;
    }
};
export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) =>  ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})
export default usersReducer;