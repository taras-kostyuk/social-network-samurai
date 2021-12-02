
import {createStore, combineReducers, applyMiddleware} from "redux"
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogReducer} from "./dialogs-reducer";
import {usersReducer} from "./user-reduser";
import {authReducer, LoginActionsType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {FormAction, reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profileReducer:profileReducer,
    dialogReducer:dialogReducer,
    sidebarReducer:sidebarReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form:formReducer
})
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootStoreType,unknown,LoginActionsType | FormAction>
export  type RootStoreType = ReturnType<typeof reducers>
export let store = createStore(reducers,applyMiddleware(thunkMiddleware))


