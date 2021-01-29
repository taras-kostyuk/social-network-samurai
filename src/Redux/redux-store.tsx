
import {createStore, combineReducers} from "redux"
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogReducer} from "./dialogs-reducer";



export type RootStateTypeRedux = ReturnType<typeof reducer>



export type StoreReduxType = typeof store


let reducer = combineReducers({

    profileReducer:profileReducer,
    dialogReducer:dialogReducer,
    sidebarReducer:sidebarReducer

})
export  type RootStoreType = ReturnType<typeof  reducer>
export let store = createStore(reducer)

