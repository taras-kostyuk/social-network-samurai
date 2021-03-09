import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType ={
    profile:ProfilePropsType
}
export const Profile = (props:any) => {


    return <div>
        <ProfileInfo profile ={props.profile} status ={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer />



    </div>
}
