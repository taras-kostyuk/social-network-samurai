import {ActionsTypes, PostType} from "./store";

export const addPostAC = (postMessageNew: string) => {
    return {
        type: "ADD-POST",
        postMessageNew: postMessageNew
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

    ]
}
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

    }
    return state
}