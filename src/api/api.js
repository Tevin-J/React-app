import * as axios from "axios";

const instance = axios.create({ /*создаем образец axios, чтоб внести в него общие куски всех запросов на сервер*/
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true, /*необходим чтоб выполнять запросы авторизованно*/
    headers: {
        'API-KEY': 'f28b0cf7-313a-42c3-9df8-994bce274198'
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUser (userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unfollowUser (userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data /*вскрыли response и отправили дату чтоб сократить код в редьюсерах*/
            })
    },
    getUser (userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    }
}
export const authAPI = {
    authMe () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}
