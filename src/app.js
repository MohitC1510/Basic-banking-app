import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter, {history} from './router/AppRouter';
// import configureStore from './store/configurestore'
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'
import {firebase} from './firebase/firebase'



ReactDOM.render(<AppRouter />, document.getElementById('app'));
        






