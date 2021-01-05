import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utilits/objectHelpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return ({
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            })
        case UNFOLLOW:
            return ({
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            })
        case SET_USERS:
            return ({
                ...state, users: action.users
            })
        case SET_CURRENT_PAGE:
            return ({
                ...state,
                currentPage: action.currentPage
            })
        case SET_TOTAL_USERS_COUNT:
            return ({
                ...state,
                totalUsersCount: action.totalUsersCount
            })
        case TOGGLE_IS_FETCHING:
            return ({
                ...state,
                isFetching: action.isFetching
            })
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return ({
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]
            })
        default:
            return state;
    }
};
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
});
/*универсальная функция для подписки-отписки, чтоб не дублировать код*/
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page))
    let response = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount))
}
export const follow = (userId) => (dispatch) => {
    let actionCreator = followSuccess
    let apiMethod = usersAPI.followUser.bind(usersAPI)
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
}
export const unfollow = (userId) => (dispatch) => {
    let actionCreator = unfollowSuccess
    let apiMethod = usersAPI.unfollowUser.bind(usersAPI)
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
}

export default usersReducer;