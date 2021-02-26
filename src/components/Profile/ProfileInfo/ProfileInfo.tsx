import React from "react"
import MainImg from "../../../images/the-samurai.png";

import s from "./ProfileInfo.module.css"
import {Preloader} from "../../common/Preloader/Preloader";

const ProfileInfo = (props:any) => {
    if (!props.profile) {
        return <Preloader />
    }
    return <div>

        <div>
            <img className={s.mainImg} src={MainImg} alt="img"/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} />
            ava + description
        </div>


    </div>
}

export default ProfileInfo