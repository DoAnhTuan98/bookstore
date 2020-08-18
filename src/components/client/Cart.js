import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThLarge, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import '../../css/client/Cart.css'

class Cart extends Component {

    render() {
        return (
            <div className="cart">
                <div className="item-amount">
                    <FontAwesomeIcon className="mr-2" icon={faShoppingBag} />
                        1 item
                    </div>
                <div className="total-price">
                    <p>
                        $0.00
                        </p>
                </div>
            </div>
        )
    }
}

export default Cart