import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type DataType ={
    id: number
    email:string
    login: string
}
type setAuthUserDataAT = {
    type: 'SET_USER_DATA'
    data: DataType
    isAuth: boolean
}

type ActionsTypes = setAuthUserDataAT
type InitialStateType = {
    id: number | null,
    email:string | null,
    login: string | null,
    isAuth:boolean
}

const SET_USER_DATA = 'SET_USER_DATA'

let initialState:InitialStateType = {
    id: null,
    email:null,
    login: null,
    isAuth:false

}
export const    authReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth:true
            }


    }
    return state
}

export const setAuthUserData = (id:string, email:string, login:string) => ({type:SET_USER_DATA,data:{id: id,email,login}})
export const getAuthUserData = () => (dispatch:Dispatch) => {
    authAPI.me().then(response => {
    if(response.data.resultCode === 0) {
        let{id,email,login} = response.data.data
        dispatch(setAuthUserData(id,email,login))
    }

});}
