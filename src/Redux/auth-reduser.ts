
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
export const authReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return {
                ...state,
                ...action.data,
                isAuth:true
            }


    }
    return state
}
export const setAuthUserData = (id:string, email:string, login:string) => ({type:SET_USER_DATA,data:{id: id,email,login}})

