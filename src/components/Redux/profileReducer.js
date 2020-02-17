const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        postData: [
            {id: 1, message: 'Терперье и труд все перетрут.', likesCount: 15},
            {id: 2, message: 'Продам гараж. Пишите в лс.', likesCount: 12}
        ],
        newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newPostText;
            return stateCopy
        }
        default:
            return state;
    }


    return state;
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>  ({type: UPDATE_NEW_POST_TEXT,
    newPostText: text});
export default profileReducer;