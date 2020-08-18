import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap'
import './App.css';
import './css/client/Cart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThLarge, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Header from './components/client/Header'
import Cart from './components/client/Cart'
import Main from './components/client/Main';
class App extends Component {
    render() {
        return (
            <div className="App">
                {/* header  */}
                <Header />
                {/* cart */}
                <Cart />
                {/* main  */}
                <Main />
            </div>
        )
    }
}

export default App;
