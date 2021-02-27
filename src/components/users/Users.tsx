import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/image/user.png";
import {UserType} from "./UsersContainer";
import axios from "axios";


type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
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


        {
            props.users.map(u => <div key={u.id}>
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
            ? <button onClick={() => {
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                    withCredentials:true,
                    headers:{
                        "API-KEY":"8dc404ff-3523-492a-9e90-857619657bf6"
                    }
                })
                    .then(response => {
                        if (response.data.resultCode === 0){props.unFollow(u.id)}
                    });

            }
            }>
                unFollow </button>
            :
            <button onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                    withCredentials:true,
                    headers:{
                        "API-KEY":"8dc404ff-3523-492a-9e90-857619657bf6"
                    }
                })
                    .then(response => {
                        if (response.data.resultCode === 0){props.follow(u.id)}
                    });

            }
            }>
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


