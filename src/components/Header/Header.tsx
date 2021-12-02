import React from "react"
import Logo from "../../images/logo-samurai.png";
import MainLogo from "../../images/cros.png";
import s from "./Header.module.css"
import { NavLink } from "react-router-dom";
type HeaderPropsType ={
    isAuth:boolean
    login:string
    logout:any }
const Header = (props:HeaderPropsType) => {
    return <header className={s.header}>
        <img className={s.logo} src={Logo} alt="logo"/>
        <img className={s.mainLogo} src={MainLogo} alt="mainLogo"/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout} > Log out</button> </div>
            : <NavLink className={s.loginBlock} to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
export default Header