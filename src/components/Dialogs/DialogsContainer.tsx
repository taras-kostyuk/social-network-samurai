import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogPageType, sendMessage, updateNewMessageBody} from "../../Redux/store";
import {Dialogs} from "./Dialogs";
import {store, StoreReduxType} from "../../Redux/redux-store";
import {StoreContext} from "../../StoreContext";

type DialogsContainerPropsType = {

    store: StoreReduxType
}

export const DialogsContainer = () => {



    return <StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState().dialogReducer

            let onSendMessageClick = () => {
                store.dispatch(sendMessage())
            }
            let onNewMessageChange = (body: any) => {
                store.dispatch(updateNewMessageBody(body))
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                     sendMessage={onSendMessageClick}
                     dialogsPage={state}/>
        }

    }
    </StoreContext.Consumer>
}
