import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {DialogPageType} from "../../Redux/store";

type    FormDataType = {
    newMessageBody: string
}
type DialogsPropsType = {
    dialogsPage: DialogPageType
    sendMessage: Function
    isAuth: boolean
}
export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)
    const addNewMessage = (values: addNewMessageType) => { props.sendMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
type addNewMessageType = {
    newMessageBody: string
}
const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeHolder=" Enter your message"/>
                <div>
                    <button>send</button>
                </div>
            </div>

        </form>
    )
}
const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)
