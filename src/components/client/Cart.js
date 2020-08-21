import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import '../../css/client/Cart.css'

import { connect } from 'react-redux'
import { actOpenCartItem } from '../../actions/index'

class Cart extends Component {
    openCartItem = () => {
        this.props.openCartItem()
    }
    render() {
        console.log(this.props.statusCartItem)
        return (
            <div className="cart" onClick={this.openCartItem}>
                <div className="item-amount">
                    <FontAwesomeIcon className="mr-2" icon={faShoppingBag} />
                        0 item
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

const mapStateToProps = (state) => {
    return {
        statusCartItem: state.statusCartItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openCartItem: () => {
            dispatch(actOpenCartItem())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)