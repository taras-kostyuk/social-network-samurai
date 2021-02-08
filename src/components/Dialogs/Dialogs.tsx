import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogPageType, sendMessage, updateNewMessageBody} from "../../Redux/store";

type DialogsPropsType = {
    dialogsPage: DialogPageType

    updateNewMessageBody: (body:any) => void
    sendMessage:Function

}

export const Dialogs = (props: DialogsPropsType) => {

let state = props.dialogsPage
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

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
