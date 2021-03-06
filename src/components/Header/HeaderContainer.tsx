import React from "react"
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/auth-reduser";
import {RootStoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
type HeaderContainerPropsType = {
    isAuth:boolean
    login:string
    getAuthUserData: () => void
}
export class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {
  componentDidMount() {
      this.props.getAuthUserData()
}

    render() {

        return <Header {...this.props}/>
    }


}
let mapStateToProps = ( state:RootStoreType) => {
    return{
        isAuth:state.auth.isAuth,
        login:state.auth.login || ""
    }
}
export default connect(mapStateToProps,{getAuthUserData})(HeaderContainer)