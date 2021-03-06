import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter, {history} from './router/AppRouter';
import {startSetTransactions} from './actions/transaction';
import configureStore from './store/configurestore'
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'

const store= configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render( <p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetTransactions()).then(()=>{
    ReactDOM.render( jsx, document.getElementById('app'));
});


        






