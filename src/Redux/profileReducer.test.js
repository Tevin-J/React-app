import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
let state = {
    postData: [
        {id: 1, message: 'Терперье и труд все перетрут.', likesCount: 15},
        {id: 2, message: 'Продам гараж. Пишите в лс.', likesCount: 12}
    ]
}
it('length of posts should be incremented', () => {
    /*1 исходные данные*/
    let action = addPostActionCreator('IT-kamasutra')
    /*2 экшн*/
    let newState = profileReducer(state, action)
    /*3 проверка ожидания*/
    expect(newState.postData.length) .toBe(3)
});
it('message of new post should be correct', () => {
    /*1 исходные данные*/
    let action = addPostActionCreator('IT-kamasutra')
    /*2 экшн*/
    let newState = profileReducer(state, action)
    /*3 проверка ожидания*/
    expect(newState.postData[2].message) .toBe('IT-kamasutra')
});
it('after deleting length of messages should be decrement', () => {
    /*1 исходные данные*/
    let action = deletePost(1)
    /*2 экшн*/
    let newState = profileReducer(state, action)
    /*3 проверка ожидания*/
    expect(newState.postData.length) .toBe(1)
});
it('after deleting post length of posts should not be decrement if id is incorrect ', function () {
    /*1 исходные данные*/
    let action = deletePost(1000)
    /*2 экшн*/
    let newState = profileReducer(state, action)
    /*3 проверка ожидания*/
    expect(newState.postData.length) .toBe(2)
}); 