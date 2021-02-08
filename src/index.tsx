import React from 'react';

import './index.css';
import {RootStateTypeRedux, store} from "./Redux/redux-store";
import ReactDOM from "react-dom";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";

export const rerenderEntireTree = (state: RootStateTypeRedux) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(()=> rerenderEntireTree(store.getState()))

// було в App state={state} store={store} dispatch={store.dispatch.bind(store)}