import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
        postData: [
            {id: 1, message: 'Терперье и труд все перетрут.', likesCount: 15},
            {id: 2, message: 'Продам гараж. Пишите в лс.', likesCount: 12}
        ],
        profile: null,
        newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            return ({
                    ...state,
                    postData: [newPost, ...state.postData],
                    newPostText: ''
                })
        case UPDATE_NEW_POST_TEXT:
            return ({
                    ...state,
                    newPostText: action.newPostText
                })
        case SET_USER_PROFILE:
            return ({
                ...state,
                profile: action.profile
            })
        default:
            return state;
    }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>  ({type: UPDATE_NEW_POST_TEXT,
    newPostText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getUser(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}
export default profileReducer;