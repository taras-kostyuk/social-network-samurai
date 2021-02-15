import React from 'react';

import './index.css';
import { store} from "./Redux/redux-store";
import ReactDOM from "react-dom";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {RootStateType} from "./Redux/store";


    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );





// було в App state={state} store={store} dispatch={store.dispatch.bind(store)}