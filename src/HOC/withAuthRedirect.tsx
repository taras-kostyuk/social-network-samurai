import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {RootStoreType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {MapStatePropsRedirectType} from "../components/Profile/ProfileContainer";

let mapStateToPropsRedirect = (state:RootStoreType):MapStatePropsRedirectType => ({
    isAuth: state.auth.isAuth
})
/*export function withAuthRedirect <T> (Component:ComponentType<T>) {
    function RedirectComponent(props:MapStatePropsRedirectType) {

        let {isAuth,...restProps} = props

        if (!isAuth) return <Redirect to='/login'/>

        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedRedirectComponent
}*/
export const withAuthRedirect = ( Component:any) => {

    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>
            return<Component {...this.props}/>
        }
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}
