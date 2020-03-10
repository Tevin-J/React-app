import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
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
    }
}
export const followUnfollowAPI = {
    followUser (userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unfollowUser (userId) {
        return instance.delete(`follow/${userId}`)
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
export const profileAPI = {
    setUser (userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    }
}