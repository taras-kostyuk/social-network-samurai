import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";


export type PostType = {
    id: number,
    message: string
    likesCount: number
}

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
type setUserProfileType = {
    type:'SET_USER_PROFILE'
}

export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC>|
    ReturnType<typeof setUserProfile>|
    ReturnType<typeof setStatus>



export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    } as const
}
export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE",

    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const
}
let initialState = {
    messageForNewPost: "",
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my firs post', likesCount: 45},

    ],
    profile:null,
    status:""

}

export const setUserProfile = (profile:any) => ({type:SET_USER_PROFILE,profile} as const)
export const setStatus = (status:string) => ({type:SET_STATUS,status} as const )

export const getUserProfile = (userId:number) => (dispatch:Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch( setUserProfile(response.data))

    });
}
export const getStatus = (status:string) => (dispatch:Dispatch) => {
    profileAPI.getStatus(status)
        .then(response => {
        dispatch( setStatus(response.data))

    });
}
export const updateStatus = (status:string) => (dispatch:Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0)
            dispatch( setStatus(status))

        });
}



export const profileReducer = (state = initialState, action: ActionsTypes) => {
    if (action.type === "ADD-POST") {
        {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''
            }
        }

    } else if (action.type === "CHANGE-NEW-TEXT") {
        return {
            ...state,
            messageForNewPost: action.newText
        }


    }else if (action.type === 'SET_USER_PROFILE'){
        return{
            ...state,profile:action.profile
        }
    }else if (action.type === 'SET_STATUS'){
        return {
            ...state,
            status:action.status
        }
    }

    return state
}