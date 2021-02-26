import React from "react"
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {RootStoreType} from "../../Redux/redux-store";

type ProfileContainerType ={
    setUserProfile: (profile:any) => void
    profile:any
}

export class ProfileContainer extends React.Component<ProfileContainerType,any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)

            });
    }

    render(){
    return <Profile {...this.props} profile={this.props.profile} />

}}
let mapStateToProps = (state:RootStoreType) => ({
profile:state.profileReducer.profile
})
export default connect  (mapStateToProps, {setUserProfile})(ProfileContainer)