
import {addPostAC, changeNewTextAC, ProfilePageType} from "../../../Redux/store";
import {MyPosts} from "./MyPosts";
import React, {ChangeEvent} from "react";
import {StoreReduxType} from "../../../Redux/redux-store";


type MyPostsContainerType = {


    store: StoreReduxType

}

export const MyPostsContainer = (props: MyPostsContainerType) => {

let state = props.store.getState()


    let addPostHandler = () => {
        props.store.dispatch(addPostAC(state.profileReducer.messageForNewPost))
    }
    const newTextChangeHandler = (newText: string) => {

        props.store.dispatch(changeNewTextAC(newText))
    }
    return (
        <MyPosts messageForNewPost={state.profileReducer.messageForNewPost}
                 changeNewText =  { newTextChangeHandler}
                 addPostHandler={addPostHandler}
                 posts={state.profileReducer.posts}/>
    )
}
