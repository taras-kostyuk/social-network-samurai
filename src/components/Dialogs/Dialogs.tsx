import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../Redux/store";
import { Redirect } from "react-router-dom";

type DialogsPropsType = {
    dialogsPage: DialogPageType
    updateNewMessageBody: (body:any) => void
    sendMessage:Function
    isAuth:boolean

}

export const Dialogs = (props: DialogsPropsType) => {

let state = props.dialogsPage
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />)

    // let newMessageElement = React.createRef<HTMLTextAreaElement>()
    /*let addMessage = () => {
        alert(newMessageElement.current?.value)
    }*/

    let newMessageBody = props.dialogsPage.updateNewMessageBody
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: any) => {
        let body = e.target.value
        props.updateNewMessageBody(body)

    }
    if (!props.isAuth) return <Redirect to ={"/login"}/>

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea
                        onChange={onNewMessageChange}
                        placeholder="Enter your message"

                        value={newMessageBody}>
                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>send</button>
                </div>


            </div>
        </div>
    )
}
