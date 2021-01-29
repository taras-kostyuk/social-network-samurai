import React from 'react';

import './index.css';
import {store} from "./Redux/redux-store";
import ReactDOM from "react-dom";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state: any) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(()=> rerenderEntireTree(store.getState()))