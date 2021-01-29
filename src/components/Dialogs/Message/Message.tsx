import React from "react";
import s from './../Dialogs.module.css'


type PropsTypeMessage = {
    message: string;
}


const Message = (props: PropsTypeMessage) => {
    return (<div className={s.message}>{props.message}</div>)
}


export default Message;