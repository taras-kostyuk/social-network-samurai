import {AppThunk} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";


type setAuthUserDataAT = {
    type: 'INITIALIZED_SUCCESS'

}

type ActionsTypes = setAuthUserDataAT
export  type InitialStateType = {
    initialized:boolean
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

 let initialState:InitialStateType = {
    initialized: false


}
export const appReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:

            return {
                ...state,
                initialized:true

            }


    }
    return state
}

export const initializedSuccess = ( ) => ({type:INITIALIZED_SUCCESS})
export const initializeApp = ():AppThunk => (dispatch) => {

let promise = dispatch(getAuthUserData())


Promise. all ([promise])
    .then(() => {dispatch(initializedSuccess())})




}




