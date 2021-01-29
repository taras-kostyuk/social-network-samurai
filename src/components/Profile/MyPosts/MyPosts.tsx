import React, {ChangeEvent} from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostAC, changeNewTextAC, ProfilePageType} from "../../../Redux/store";


type MyPostsType = {

    profilePage: ProfilePageType

    dispatch: Function
}

export const MyPosts = (props: MyPostsType) => {

    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);


    let addPostHandler = () => {

        //props.addPostHandler(props.profilePage.messageForNewPost)
        props.dispatch(addPostAC(props.profilePage.messageForNewPost))

    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.changeNewText(e.currentTarget.value)
        debugger
        props.dispatch(changeNewTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.profilePage.messageForNewPost}
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
