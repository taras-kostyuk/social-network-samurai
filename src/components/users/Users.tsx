import React from "react";
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/image/user.png'

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

export class Users extends React.Component<UsersPropsType, any> {

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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(p => {
                    return<span className={this.props.currentPage === p ? styles.selectedPage : ""}
                                 onClick={() => {
                                     this.onPageChanged(p)
                                 }}>{p}|</span>
                })}


            </div>

            {
                this.props.users.map(u => <div key={u.id}>
                 <span>
                     <div><img src={u.photos.small != null ? u.photos.small : userPhoto} alt="Avatar"
                               className={styles.userPhoto}/></div>
                     <div>{u.followed
                         ? <button onClick={() => {
                             this.props.unFollow(u.id)
                         }}> unFollow</button>
                         : <button onClick={() => {
                             this.props.follow(u.id)
                         }}>Follow</button>}
                         </div>
                         </span>
                    <span>
                         <span><div>{u.name}</div><div>{u.status}</div></span>
                         <span><div>{"u.location.country"}</div><div>{"u.location.city"}</div></span>
                         </span>
                </div>)
            }
        </div>
    }
}