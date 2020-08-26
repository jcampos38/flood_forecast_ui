import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss'
import './index.css';
import AppRoutes from './AppRoutes'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <AppRoutes/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
