import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

let initialState = {
        postData: [
            {id: 1, message: 'Терперье и труд все перетрут.', likesCount: 15},
            {id: 2, message: 'Продам гараж. Пишите в лс.', likesCount: 12}
        ],
        profile: null,
        status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            };
            return ({
                    ...state,
                    postData: [newPost, ...state.postData]
                })
        case SET_USER_PROFILE:
            return ({
                ...state,
                profile: action.profile
            })
        case SET_STATUS:
            return ({
                ...state,
                status: action.status
            })
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }

            })
    }
}
export default profileReducer;