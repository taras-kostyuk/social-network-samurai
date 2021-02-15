
import {UserType} from "../components/users/Users";

type followAT = {
    type: 'FOLLOW'
    followed: boolean
    userId: number


}
type unFollowAT = {
    type: 'UNFOLLOW'
    followed: boolean
    userId: number
}
type setUsersAT = {
    type: 'SET_USERS'
    users: Array<UserType>
}

type ActionsTypes =
    followAT |
    unFollowAT |
    setUsersAT


export type UsersType = {
    users: Array<UserType>
}
let initialState: UsersType = {
    users: []
}
export const usersReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case  'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET_USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }

    }
    return state
}
export const followAC = (userId: number) => ({type: 'FOLLOW', userId})
export const unFollowAC = (userId: number) => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', users})
