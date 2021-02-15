import React from "react";
import styles from './users.module.css'

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType

}
type LocationType = {
    city: string
    country: string
}
type UsersPropsType = {
    users: Array<UserType>
    setUsers: (users: Array<UserType>) => void
    unFollow: (userId: number) => void
    follow: (userId: number) => void
}

export let Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-YqulMZcEfj9wAhJAG3Xy3FCk2fNHBbi3g&usqp=CAU',
                followed: true,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-YqulMZcEfj9wAhJAG3Xy3FCk2fNHBbi3g&usqp=CAU',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-YqulMZcEfj9wAhJAG3Xy3FCk2fNHBbi3g&usqp=CAU',
                followed: false,
                fullName: 'Andrew',
                status: 'I am a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },

        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                 <span>
                     <div><img src={u.photoUrl} alt="Avatar" className={styles.userPhoto}/></div>
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
                         <span><div>{u.fullName}</div><div>{u.status}</div></span>
                         <span><div>{u.location.country}</div><div>{u.location.city}</div></span>
                         </span>
            </div>)
        }
    </div>
}