import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

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
export  type InitialStateType = {
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
export const authReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,

            }


    }
    return state
}

export const setAuthUserData = (id:number | null, email:string| null, login:string| null,isAuth:boolean ) => ({type:SET_USER_DATA,data:{id: id,email,login,isAuth, }})
export const getAuthUserData = () => (dispatch:Dispatch) => {
    return authAPI.me().then(response => {
    if(response.data.resultCode === 0) {
        let{id,email,login} = response.data.data
        dispatch(setAuthUserData(id,email,login,true))
    }

});

}



export const login = (email:string,password:string,rememberMe:boolean):AppThunk => (dispatch) => {


    authAPI.login(email,password,rememberMe)
        .then(response => {
        if(response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else{
            let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'

            dispatch( stopSubmit("login",{_error:messages}) )
        }

    });}
export const logout = ():AppThunk => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                 dispatch(setAuthUserData(null,null,null,false))
            }

        });}

type setUserDataACType = ReturnType<typeof setAuthUserData>
type UserDataACType = ReturnType<typeof stopSubmit>




export type LoginActionsType = setUserDataACType | UserDataACType


