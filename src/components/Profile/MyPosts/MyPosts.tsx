import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import  {reduxForm,Field} from "redux-form";
import {PostType} from "../../../Redux/profile-reducer";
import { maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


type MyPostsType = {
    changeNewText: (newText: string) => void
    //addPostHandler: (text: string) => void
    posts: Array<PostType>
    messageForNewPost: string

}
type onAddPostValueType = {
    newPostText:string
}

const maxLength10 = maxLengthCreator(10)

let  AddNewPostForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>

        <div> <Field name = "newPostText" component={Textarea} placeholder={'post message'} validate={[required,maxLength10]} /> </div>
        <div> <button>Add post</button> </div>
    </form>;
}

 let AddNewPostFormRedux = reduxForm <onAddPostValueType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/> );

/*
    let addPostHandler = () => {

        props.addPostHandler(props.messageForNewPost)
        //props.dispatch(addPostAC(props.profilePage.messageForNewPost))

    }
    let newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.changeNewText(e.currentTarget.value)

        // props.dispatch(changeNewTextAC(e.currentTarget.value))
    }*/

    let onAddPost = (values:onAddPostValueType) => {
        props.changeNewText(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}




//{ value: string, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, onClick: () => void }