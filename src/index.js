import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {Provider} from 'mobx-react'
import stores from './stores'
// import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Provider {...stores}>
    <Router basename="/">
        <App/>
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// registerServiceWorker();
