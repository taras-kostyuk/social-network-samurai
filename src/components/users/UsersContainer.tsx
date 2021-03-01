import React from "react";
import {connect} from "react-redux";
import {RootStoreType} from "../../Redux/redux-store";

import {
    follow,
    followSuccess, getUsers,
    setCurrentPage,
    toggleFollowingProgress, unFollow,
    unFollowSuccess
} from "../../Redux/user-reduser";

import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

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

let mapStateToProps = (state: RootStoreType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress

    }
}
/*let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching:boolean) => {
            dispatch(toggleSetIsFetchingAC(isFetching))
        }
    }
}*/

export default connect(mapStateToProps,
    {
        follow,
        unFollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    })(UsersContainer)
