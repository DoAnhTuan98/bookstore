import React, { Component } from 'react'
import Nav from '../../components/client/Nav'
import UserSideBar from '../../components/client/UserSideBar'
import CheckoutForm from '../../components/client/CheckoutForm'
import '../../css/client/Checkout.css'
import { ElementsConsumer } from '@stripe/react-stripe-js';
class Checkout extends Component {
    constructor(pros) {
        super(pros)

    }
    render() {
        return (
            <div>
                <Nav />
                <div className="checkout user-container">
                    <div className="side-bar">
                        <UserSideBar />
                    </div>
                    <ElementsConsumer>
                        {({ stripe, elements }) => (
                            <CheckoutForm stripe={stripe} elements={elements} />
                        )}
                    </ElementsConsumer>
                </div>
            </div>

        )
    }
}

export default Checkout