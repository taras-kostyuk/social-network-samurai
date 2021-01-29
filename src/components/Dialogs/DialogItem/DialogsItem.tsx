import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type PropsTypeDialogs = {
    name: string;
    id: number;
}

const DialogItem = (props: PropsTypeDialogs) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

}

export default DialogItem;