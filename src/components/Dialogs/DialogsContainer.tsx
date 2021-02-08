import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogPageType, sendMessage, updateNewMessageBody} from "../../Redux/store";
import {Dialogs} from "./Dialogs";
import {StoreReduxType} from "../../Redux/redux-store";

type DialogsContainerPropsType = {

store:StoreReduxType
}

 export const DialogsContainer = (props: DialogsContainerPropsType) => {

 let state = props.store.getState().dialogReducer

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessage())
    }
    let onNewMessageChange = (body: any) => {
        props.store.dispatch(updateNewMessageBody(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
}
