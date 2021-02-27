import {UserType} from "../components/users/UsersContainer";


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


type ActionsTypes =
    followAT |
    unFollowAT |
    setUsersAT|
    setCurrentPageAT|
    setTotalUsersCountAT|
    toggleSetIsFetchingAT


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
    isFetching:true

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


    }
    return state
}
export const setCurrentPage = (currentPage:any) => ({type:'SET_CURRENT_PAGE',currentPage:currentPage })
export const follow = (id: number) => ({type: 'FOLLOW', id})
export const unFollow = (id: number) => ({type: 'UNFOLLOW', id})
export const setUsers = (users: Array<UserType>) => ({type: 'SET_USERS', users})
export const setTotalUsersCount = (totalUsersCount:any) => ({type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount})
export const toggleSetIsFetching = (isFetching:boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching})
