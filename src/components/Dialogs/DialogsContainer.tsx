import React from "react";
import {RootStateType, sendMessageAC, updateNewMessageBodyAC} from "../../Redux/store";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {RootStoreType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";

import {withAuthRedirect} from "../../HOC/withAuthRedirect";

/*
type DialogsContainerPropsType = {

    store: StoreReduxType
}*/

/*export const DialogsContainer = () => {



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
}*/

let mapStateToProps = (state: RootStoreType) => {
    return {
        dialogsPage: state.dialogReducer

    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
