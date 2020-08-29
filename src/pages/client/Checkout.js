import React, { Component } from 'react'
import Nav from '../../components/client/Nav'
import UserSideBar from '../../components/client/UserSideBar'
import CheckoutForm from '../../components/client/CheckoutForm'
import '../../css/client/Checkout.css'
import { ElementsConsumer } from '@stripe/react-stripe-js';
import { connect } from 'react-redux'
class Checkout extends Component {
    render() {
        let { user } = this.props
        return (
            <div>
                <Nav />
                <div className="checkout user-container">
                    <div className="side-bar">
                        <UserSideBar />
                    </div>
                    <ElementsConsumer>
                        {({ stripe, elements }) => (
                            <CheckoutForm stripe={stripe} elements={elements} user={user} />
                        )}
                    </ElementsConsumer>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Checkout)