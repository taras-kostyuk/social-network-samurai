import React from "react";
import {connect} from "react-redux";
import {RootStoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from "../../Redux/user-reduser";
import axios from "axios";
import {Users} from "./Users";
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
    setTotalUsersCount:(data:any) => void
}

export class UsersContainer extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        console.log(this.props.totalUsersCount)
        console.log(this.props.pageSize)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                console.log(response)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    };

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {

                this.props.setUsers(response.data.items)

            });
    }

    /* getUsers =() => {

             axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response: any) => {
                 this.props.setUsers(response.data.items)
             })


     }*/
    render() {

        return  <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged = {this.onPageChanged}
                       users={this.props.users}
                       unFollow={this.props.unFollow}
                       follow={this.props.follow}
        />
    }
}

let mapStateToProps = (state: RootStoreType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)