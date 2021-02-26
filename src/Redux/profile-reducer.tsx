

export type PostType = {
    id: number,
    message: string
    likesCount: number
}

const SET_USER_PROFILE = 'SET_USER_PROFILE'
type setUserProfileType = {
    type:'SET_USER_PROFILE'
}
export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC>|
    ReturnType<typeof setUserProfile>

export const addPostAC = (postMessageNew: string) => {
    return {
        type: "ADD-POST",
        postMessageNew: postMessageNew
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
let initialState = {
    messageForNewPost: "",
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my firs post', likesCount: 45},

    ],
    profile:null

}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const


}
export const setUserProfile = (profile:any) => ({type:SET_USER_PROFILE,profile} as const)

export const profileReducer = (state = initialState, action: ActionsTypes) => {
    if (action.type === "ADD-POST") {
        {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessageNew,
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
    }
    return state
}