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
type UsersPropsType = {
    users: Array<UserType>
    setUsers: (data:any) => void
    unFollow: (userId: number) => void
    follow: (userId: number) => void
}

export let Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response:any) => {
            props.setUsers(response.data.items)
        })

    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                 <span>
                     <div><img src={u.photos.small != null ? u.photos.small : userPhoto } alt="Avatar" className={styles.userPhoto}/></div>
                     <div>{u.followed
                         ? <button onClick={() => {
                             props.unFollow(u.id)
                         }}> unFollow</button>
                         : <button onClick={() => {
                             props.follow(u.id)
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