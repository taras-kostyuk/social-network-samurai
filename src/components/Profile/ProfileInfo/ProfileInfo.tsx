import React from "react"
import MainImg from "../../../images/the-samurai.png";

import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return <div>

        <div>
            <img className={s.mainImg} src={MainImg} alt="img"/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>


    </div>
}

export default ProfileInfo