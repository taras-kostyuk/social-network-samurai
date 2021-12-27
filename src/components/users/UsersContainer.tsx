import React from "react";
import {connect} from "react-redux";
import {RootStoreType} from "../../Redux/redux-store";

import {
    follow,
     requestUsers,
    setCurrentPage,
    toggleFollowingProgress, unFollow,

} from "../../Redux/user-reduser";

import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";

export type UserType = {

    id: number
    photos: any
    followed: boolean
    name: string
    status: string
    location: LocationType

}
type LocationType = {
    city: string
    country: string
}

export type UsersPropsType = {
    users: Array<UserType>

    unFollow: (userId: number) => void
    follow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: any

    isFetching:boolean

    toggleFollowingProgress:(isFetching:boolean,userId:number) => void
    followingInProgress:Array<number>
    getUsers:any

}

export class UsersContainer extends React.Component<UsersPropsType, any> {

    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
      /* this.props.toggleSetIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {

                this.props.toggleSetIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            });*/
    };

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
      /*  this.props.setCurrentPage(pageNumber)
        this.props.toggleSetIsFetching(true)
        usersAPI.getUsers(pageNumber,this.props.pageSize)
            .then(data => {
                this.props.toggleSetIsFetching(false)
                this.props.setUsers(data.items)

            });*/
    }


    render() {

        return<>
            {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      unFollow={this.props.unFollow}
                      follow={this.props.follow}

               followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}
/*
let mapStateToProps = (state: RootStoreType) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress

    }
}*/
let mapStateToProps = (state: RootStoreType) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)

    }
}


export default compose<React.ComponentType>(

    connect(mapStateToProps,
        {
            follow,
            unFollow,
            setCurrentPage,
            toggleFollowingProgress,
            getUsers: requestUsers
        }))(UsersContainer)