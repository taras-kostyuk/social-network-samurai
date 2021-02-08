import {addPostAC, changeNewTextAC, ProfilePageType} from "../../../Redux/store";
import {MyPosts} from "./MyPosts";
import React, {ChangeEvent} from "react";
import {StoreReduxType} from "../../../Redux/redux-store";
import {StoreContext} from "../../../StoreContext";


type MyPostsContainerType = {


    store: StoreReduxType

}

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {

                let state = store.getState()


                let addPostHandler = () => {
                    store.dispatch(addPostAC(state.profileReducer.messageForNewPost))
                }
                const newTextChangeHandler = (newText: string) => {

                    store.dispatch(changeNewTextAC(newText))
                }
                return<MyPosts messageForNewPost={state.profileReducer.messageForNewPost}
                     changeNewText={newTextChangeHandler}
                     addPostHandler={addPostHandler}
                     posts={state.profileReducer.posts}/>}
        }
        </StoreContext.Consumer>
    )
}
