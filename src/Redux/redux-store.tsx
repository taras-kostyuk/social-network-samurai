
import {createStore, combineReducers} from "redux"
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogReducer} from "./dialogs-reducer";



export type RootStateTypeRedux = ReturnType<typeof reducers>

export type StoreReduxType = typeof store

let reducers = combineReducers({
    profileReducer:profileReducer,
    dialogReducer:dialogReducer,
    sidebarReducer:sidebarReducer
})
export  type RootStoreType = ReturnType<typeof  reducers>
export let store = createStore(reducers)

