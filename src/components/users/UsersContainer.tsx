import React from "react";
import {connect} from "react-redux";
import {RootStoreType} from "../../Redux/redux-store";

import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleSetIsFetching,
    unFollow
} from "../../Redux/user-reduser";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

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
    setUsers: (data: any) => void
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: any
    setTotalUsersCount: (data: any) => void
    isFetching:boolean
    toggleSetIsFetching:(isFetching:boolean) => void
}

export class UsersContainer extends React.Component<UsersPropsType, any> {

    componentDidMount = () => {
       this.props.toggleSetIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials:true
        })
            .then(response => {

                this.props.toggleSetIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    };

    onPageChanged = (pageNumber: number) => {

        this.props.setCurrentPage(pageNumber)
        this.props.toggleSetIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
            withCredentials:true
        })
            .then(response => {
                this.props.toggleSetIsFetching(false)
                this.props.setUsers(response.data.items)

            });
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
        isFetching: state.usersPage.isFetching

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
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleSetIsFetching
    })(UsersContainer)
