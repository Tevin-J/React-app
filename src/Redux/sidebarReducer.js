

let initialState = {
    friends: [
        {
            id: 1,
            name: 'Misha',
            avatar: "https://thumbs.dreamstime.com/b/desenhos-animados-bonitos-da-cara-do-menino-110656357.jpg"
        },
        {
            id: 2,
            name: 'Valera',
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnXsITUj-e_i32TpFr0CQNW0YM9n4dbUHo7r00ynUKW15hBtF&s"
        },
        {
            id: 3,
            name: 'Egor',
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQF8Z879_maOZBlmNXL_guXrL8Muk8JAGj6ugglvkN70ppycF5&s"
        }
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;