import React from "react"
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {RootStoreType} from "../../Redux/redux-store";
import {withRouter, RouteComponentProps} from "react-router-dom"


type PathParamType = {
    id:string
}

type MapStatePropsType = {
    profile:any
}
type MapDispatchPropsType ={
    setUserProfile: (profile:any) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

export class ProfileContainer extends React.Component<PropsType,any> {
    componentDidMount() {
        let userId = this.props.match.params.id
        if (!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)

            });
    }

    render(){
    return <Profile {...this.props} profile={this.props.profile} />

}}
let mapStateToProps = (state:RootStoreType):MapStatePropsType => ({
profile:state.profileReducer.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect  (mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)