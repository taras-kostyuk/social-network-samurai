import React from "react"
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../Redux/auth-reducer";
import {RootStoreType} from "../../Redux/redux-store";
type HeaderContainerPropsType = {
    isAuth:boolean
    login:string
    getAuthUserData: () => void
    logout:any
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
export default connect(mapStateToProps,{getAuthUserData, logout})(HeaderContainer)