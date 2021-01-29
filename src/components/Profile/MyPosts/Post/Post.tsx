import React from "react"
import avaMini from '../../../../images/samurai-mini.png';
import s from "./Post.module.css"

type PostPropsType = {
    message: string
    likesCount: number

}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src={avaMini} alt={'ava'} />
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post