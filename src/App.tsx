import React from 'react';
import './App.css';
import Header from "./components/Herader/Header";
import Navbar from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {RootStateType} from "./Redux/store";
import {Profile} from "./components/Profile/Profile";
import {RootStateTypeRedux, StoreReduxType} from "./Redux/redux-store";


type AppPropsType = {
    state: RootStateType
    store: StoreReduxType
    dispatch: Function
}


export const App: React.FC<AppPropsType> = (props: AppPropsType) => {
let state =  props.store.getState()
debugger
    return (

            <div className="app-wrapper">

                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path='/dialogs' render={() =>
                        <Dialogs
                            dialogsPage={state.dialogReducer}
                            dispatch={props.dispatch}
                        />}/>


                    <Route path='/profile' render={() =>
                        <Profile
                            profilePage={state.profileReducer}
                            dispatch={props.dispatch}
                            // addPost={props.store.addPost.bind(props.store)}
                            // changeNewText={props.store.changeNewText.bind(props.store)}
                        />}
                        // messageForNewPost={state.profilePage.messageForNewPost}


                    />


                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>

                </div>


            </div>


    )
}

