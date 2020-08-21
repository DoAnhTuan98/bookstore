import React, { Component } from 'react';
// import { Button, Container, Row, Col } from 'reactstrap'
import './App.css';
import './css/client/Cart.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faThLarge, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Header from './components/client/Header'
import Cart from './components/client/Cart'
import Main from './components/client/Main';
import CartItem from './components/client/CartItem'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducers from './reducers'

const store = createStore(appReducers)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    {/* header  */}
                    <Header />
                    {/* cart */}
                    <Cart />
                    <CartItem />
                    {/* main  */}
                    <Main />
                </div>
            </Provider>

        )
    }
}

export default App;
