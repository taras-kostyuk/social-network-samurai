import React from "react"

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {store, StoreReduxType} from "../../Redux/redux-store";


type ProfilePropsType = {

    store:StoreReduxType
}

export const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo/>

        <MyPostsContainer store={props.store} />

    </div>
}
