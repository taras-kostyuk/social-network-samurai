import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {RootStoreType} from "../Redux/redux-store";
import {connect} from "react-redux";


type MapStatePropsType ={
    isAuth:boolean}

let mapStateToPropsRedirect = (state:RootStoreType):MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect <T> ( Component:ComponentType<T>)  {

    const RedirectComponent = (props:MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={"/login"}/>
        return<Component {...restProps as T}/>
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}

