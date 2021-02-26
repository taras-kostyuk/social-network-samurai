import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>


}
export type MessageType = {
    id: number
    message: string

}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number,
    message: string
    likesCount: number
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    updateNewMessageBody: string
    sendMessage: string
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}


export type StoreType = {
    _state: RootStateType
    // changeNewText: (newText: string) => void
    // rerenderEntireTree: () => void
    // addPost: (postMessage: string) => void
    _callSubscriber: (state: RootStateType) => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void

}


export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC>


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
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const


}
export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE",

    } as const
}

export let store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "",
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my firs post', likesCount: 45},

            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'}

            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'YO'},
                {id: 4, message: 'YO'},
                {id: 5, message: 'YO'},
            ],
            updateNewMessageBody: "",
            sendMessage: ""
        },
        sidebar: {}

    },
/*    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText;
        this._callSubscriber()
    },

    addPost(postMessageNew: string) {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: postMessageNew,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.messageForNewPost = ""
        this._callSubscriber()
    },*/
    _callSubscriber() {
        console.log("state Changed")
    },

    subscribe(callback) {
        this._callSubscriber = callback
    },
    getState() {
        return this._state
    },


    dispatch(action) {

      // this._state.profilePage =  profileReducer(this._state.profilePage,action)
      this._state.dialogsPage =  dialogReducer(this._state.dialogsPage,action)
      this._state.sidebar =  sidebarReducer(this._state.sidebar,action)
this._callSubscriber(this._state)

    }

}


// React.FC<ProfilePropsType> = ({profilePage})

/*

let rerenderEntireTree = () => {
    console.log("hello")
}

export const subscribe = (callback : () => void)=>{
    rerenderEntireTree = callback
}


 export const addPost = (postMessage:string) => {
    const newPost:PostType = {
        id: new Date().getTime(),
        message: postMessage,
        likesCount:0
    }
     state.profilePage.posts.push(newPost)
     state.profilePage.messageForNewPost=""
     rerenderEntireTree()
 };


export const changeNewText = (newText: string) => {
    state.profilePage.messageForNewPost = newText;
    rerenderEntireTree()
}*/
