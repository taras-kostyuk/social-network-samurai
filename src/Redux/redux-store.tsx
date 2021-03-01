
import {createStore, combineReducers, applyMiddleware} from "redux"
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogReducer} from "./dialogs-reducer";
import {usersReducer} from "./user-reduser";
import {authReducer} from "./auth-reduser";
import  thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    profileReducer:profileReducer,
    dialogReducer:dialogReducer,
    sidebarReducer:sidebarReducer,
    usersPage: usersReducer,
    auth:authReducer
})
export  type RootStoreType = ReturnType<typeof reducers>
export let store = createStore(reducers,applyMiddleware(thunkMiddleware))


