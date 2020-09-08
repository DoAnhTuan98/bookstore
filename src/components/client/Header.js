import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThLarge, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
// import '../../css/client/Nav.css'
// import '../../css/client/Banner.css'
import Nav from './Nav'
import Banner from './Banner'
class Header extends Component {

    render() {
        let { onFindProduct } = this.props
        return (
            <header>
                {/* Nav  */}
                <Nav />
                {/* slider  */}
                <Banner onFindProduct={onFindProduct} />
            </header>
        )
    }
}

export default Header