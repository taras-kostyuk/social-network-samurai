import React from "react"
import Logo from "../../images/logo-samurai.png";
import MainLogo from "../../images/cros.png";
import s from "./Header.module.css"
const Header = () => {
    return <header className={s.header}>
        <img className={s.logo} src={Logo} alt="logo"/>
        <img className={s.mainLogo} src={MainLogo} alt="mainLogo"/>
    </header>
}
export default Header