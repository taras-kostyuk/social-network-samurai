import React from "react"
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {RootStoreType} from "../../Redux/redux-store";
import {withRouter, RouteComponentProps, Redirect} from "react-router-dom"



type PathParamType = {
    userId:string

}
type ProfilePropsType ={

}
type MapStatePropsType = {
    profile:ProfilePropsType
    isAuth:boolean
}
type MapDispatchPropsType ={

    getUserProfile:(userId:string) => void

}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

export class ProfileContainer extends React.Component<PropsType,any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        } debugger
        this.props.getUserProfile(userId)

    }
    render(){

        if (!this.props.isAuth) return <Redirect to={"/login"}/>
    return <Profile {...this.props} profile={this.props.profile} />

}}
let mapStateToProps = (state:RootStoreType):MapStatePropsType => ({
profile:state.profileReducer.profile,
    isAuth: state.auth.isAuth
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect  (mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)


/*
"aboutMe": string,
    "contacts": {
    "facebook": string,
        "website": null,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": null,
        "github": string,
        "mainLink": null
},
"lookingForAJob": true,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
    "small": string,
        "large": string
}*/


