import React, {ChangeEvent} from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../Redux/store";


type MyPostsType = {
    changeNewText: (newText: string) => void
    addPostHandler: (text:string) => void
    posts: Array<PostType>
    messageForNewPost: string

}

export const MyPosts = (props:MyPostsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);


    let addPostHandler = () => {

        props.addPostHandler(props.messageForNewPost)
        //props.dispatch(addPostAC(props.profilePage.messageForNewPost))

    }
    let newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.changeNewText(e.currentTarget.value)

       // props.dispatch(changeNewTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.messageForNewPost}
                              onChange={newTextChangeHandler}>

                    </textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}
