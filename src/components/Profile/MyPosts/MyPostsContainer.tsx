import {addPostAC, changeNewTextAC, PostType, RootStateType} from "../../../Redux/store";
import {MyPosts} from "./MyPosts";
import React  from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStoreType} from "../../../Redux/redux-store";


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

type map = {
    posts: Array<PostType>
    messageForNewPost: string
}
type disp = {
    changeNewText: (newText: string) => void
    addPostHandler: (text:string) => void
}

    let  mapStateToProps =(state:RootStoreType) => {

    return{
        messageForNewPost: state.profileReducer.messageForNewPost,
        posts: state.profileReducer.posts
    }
}
let mapDispatchToProps = (dispatch:Dispatch) => {
return{
    /*addPostHandler : (state:RootStateType) => {dispatch(addPostAC(state.profilePage.messageForNewPost))},*/
    addPostHandler : (text:string) => {dispatch(addPostAC(text))},
    changeNewText : (newText:string) => {dispatch(changeNewTextAC(newText))}

}
    }
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)


//<map, disp, {}, RootStateType >