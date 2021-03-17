
import {MyPosts} from "./MyPosts";
import React  from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStoreType} from "../../../Redux/redux-store";
import {addPostAC, changeNewTextAC} from "../../../Redux/profile-reducer";


/*type MyPostsContainerType = {


    store: StoreReduxType

}*/

/*export const MyPostsContainer = () => {

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
}*/



    let  mapStateToProps =(state:RootStoreType) => {

    return{
        messageForNewPost: state.profileReducer.messageForNewPost,
        posts: state.profileReducer.posts
    }
}
let mapDispatchToProps = (dispatch:Dispatch) => {
return{
    /*addPostHandler : (state:RootStateType) => {dispatch(addPostAC(state.profilePage.messageForNewPost))},*/
   // addPostHandler : (text:string) => {dispatch(addPostAC(text))},
    changeNewText : (newPostText:string) => {dispatch(addPostAC(newPostText))}

}
    }
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)


//<map, disp, {}, RootStateType >