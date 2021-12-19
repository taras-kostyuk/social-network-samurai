import React from "react"
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profile-reducer";
import {RootStoreType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom"
import {compose} from "redux";

type PathParamType = {
    userId:number | any


}
export type ProfilePropsType ={

}
export type MapStatePropsType = {

   profile:ProfilePropsType
    status:string
    authorizedUserId: number | null
    isAuth:boolean

}
export type MapStatePropsRedirectType = {

    isAuth:boolean
}
type MapDispatchPropsType ={

    getUserProfile:(userId:number) => void
    getStatus:(userId:number) => void
    updateStatus:(status:string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

export class ProfileContainer extends React.Component<PropsType,any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId as number
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<any>, snapshot?: any) {
        if(prevProps.status !== this.props.status)
        this.setState({
            status:this.props.status
        })
    }

    render(){


    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>

}}

let mapStateToProps = (state:RootStoreType):MapStatePropsType => ({
    profile:state.profileReducer.profile,
    status:state.profileReducer.status,
    authorizedUserId:state.auth.id,
    isAuth: state.auth.isAuth

})

export default compose<React.ComponentType>(connect  (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

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


