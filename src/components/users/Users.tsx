import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/image/user.png";
import {UserType} from "./UsersContainer";



type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    unFollow: (userId: number) => void
    follow: (userId: number) => void

    followingInProgress:Array<number>

}

export let Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ""}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }
                                 }>{p}|
                    </span>
                })
            }
        </div>
        {props.users.map(u => <div key={u.id}>
    <span>
        <div>

            <a href = {'/profile/' + u.id}>
            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                 alt="Avatar"
                 className={styles.userPhoto}
            />
            </a>
        </div>
    <div>{

        u.followed
            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.unFollow(u.id)}}>
                UnFollow </button> :
            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}}>
                Follow </button>}
                    </div>
    </span>
                < span>
    <span><div>{u.name}
        </div><div>{u.status}</div> </span>
    < span> <div>{"u.location.country"}
        </div><div>{"u.location.city"}</div> </span>
    </span>
            </div>)
        }
    </div>

}


