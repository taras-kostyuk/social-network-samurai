import React from "react";
import {connect} from "react-redux";
import {Users, UserType} from "./Users";
import {RootStoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC} from "../../Redux/user-reduser";

let mapStateToProps = (state: RootStoreType) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)