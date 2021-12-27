import {UserType} from "../components/users/UsersContainer";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";


type followAT = {
    type: 'FOLLOW'
    id: number
    followed: boolean


}
type unFollowAT = {
    type: 'UNFOLLOW'
    followed: boolean
    id: number
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
type toggleSetIsFetchingAT = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching:boolean
}
type toggleFollowingProgressAT = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    followingInProgress:Array<number>
    isFetching:boolean
    userId:number
}


type ActionsTypes =
    followAT |
    unFollowAT |
    setUsersAT|
    setCurrentPageAT|
    setTotalUsersCountAT|
    toggleSetIsFetchingAT|
    toggleFollowingProgressAT


export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage:number
    isFetching:boolean
    followingInProgress:Array<number>

}
let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage:1,
    isFetching:true,
    followingInProgress: []

}
export const usersReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case  'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
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
        case 'TOGGLE_IS_FETCHING': {
            return {...state,isFetching: action.isFetching}
        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':{
            return {...state,
                followingInProgress: action.isFetching
                    ?[...state.followingInProgress, action.userId]
                    :state.followingInProgress.filter(id => id != action.userId)}
        }


    }
    return state
}
export const setCurrentPage = (currentPage:any) => ({type:'SET_CURRENT_PAGE',currentPage:currentPage })
export const followSuccess = (id: number) => ({type: 'FOLLOW', id})
export const unFollowSuccess = (id: number) => ({type: 'UNFOLLOW', id})
export const setUsers = (users: Array<UserType>) => ({type: 'SET_USERS', users})
export const setTotalUsersCount = (totalUsersCount:any) => ({type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount})
export const toggleSetIsFetching = (isFetching:boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching})
export const toggleFollowingProgress = (isFetching:boolean,userId:number) => ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching,userId})

export const requestUsers= (page:number, pageSize:number) => {
    return(dispatch:Dispatch) => {
    dispatch(toggleSetIsFetching(true))
        dispatch(setCurrentPage(page))
    usersAPI.getUsers(page, pageSize).then(data => {

        dispatch(toggleSetIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    });
}}
export const follow = (userId:number) => {

    return(dispatch:Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0){dispatch(followSuccess(userId))}
                dispatch( toggleFollowingProgress(false, userId))
            });

    }}
export const unFollow = (userId:number) => {

    return(dispatch:Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0){dispatch(unFollowSuccess(userId))}
                dispatch( toggleFollowingProgress(false, userId))
            });

    }}