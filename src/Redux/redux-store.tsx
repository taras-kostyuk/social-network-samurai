
import {createStore, combineReducers} from "redux"
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogReducer} from "./dialogs-reducer";
import {usersReducer} from "./user-reduser";


let reducers = combineReducers({
    profileReducer:profileReducer,
    dialogReducer:dialogReducer,
    sidebarReducer:sidebarReducer,
    usersPage: usersReducer
})
export  type RootStoreType = ReturnType<typeof reducers>
export let store = createStore(reducers)


