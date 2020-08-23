import React, { Component } from 'react';
import './App.css';
import './css/client/Cart.css'

import Header from './components/client/Header'
import Cart from './components/client/Cart'
import Main from './components/client/Main';
import CartItem from './components/client/CartItem'
import routes from './routes'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducers from './reducers'
import {
    BrowserRouter,
    Switch,
    Route,
    // Link
} from "react-router-dom";

import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_UveTYJMSFhA9nBMhfj2AE6K600nYtR677m');

const store = createStore(appReducers)

class App extends Component {
    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            })
        }
        return <Switch>{result}</Switch>
    }
    render() {
        return (
            <Elements stripe={stripePromise}>
                <Provider store={store}>
                    <BrowserRouter>
                        <div className="App">
                            {this.showContentMenus(routes)}
                        </div>
                    </BrowserRouter>
                </Provider>
            </Elements>
        )
    }
}

export default App;
