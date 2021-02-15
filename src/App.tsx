import React from 'react';
import './App.css';
import Header from "./components/Herader/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Profile} from "./components/Profile/Profile";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";


/*type AppPropsType = {
    state: RootStateType
    store: StoreReduxType
    dispatch: Function
}*/


export const App = () => {
//let state =  props.store.getState()
debugger
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/user' render={() => <UsersContainer/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>

                </div>


            </div>


    )
}

