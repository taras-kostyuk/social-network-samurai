import {UserType} from "../components/users/UsersContainer";


type followAT = {
    type: 'FOLLOW'
    userId: number
    followed: boolean


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
type setCurrentPageAT = {
    type: 'SET_CURRENT_PAGE'
    currentPage:any
}
type setTotalUsersCountAT = {
    type: 'SET_TOTAL_USERS_COUNT'
    count:any
}


type ActionsTypes =
    followAT |
    unFollowAT |
    setUsersAT|
    setCurrentPageAT|
    setTotalUsersCountAT


export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage:number
    isFetching:boolean
}
let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage:1,
    isFetching:false

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
            return {...state, users: action.users}
        }

        case 'SET_CURRENT_PAGE': {
            return {...state,currentPage: action.currentPage}
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return {...state,totalUsersCount: action.count}
        }

    }
    return state
}
export const setCurrentPageAC = (currentPage:any) => ({type:'SET_CURRENT_PAGE',currentPage:currentPage })
export const followAC = (userId: number) => ({type: 'FOLLOW', userId})
export const unFollowAC = (userId: number) => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', users})
export const setTotalUsersCountAC = (totalUsersCount:any) => ({type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount})
