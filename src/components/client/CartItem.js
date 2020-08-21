import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faTimes } from "@fortawesome/free-solid-svg-icons";
import '../../css/client/Cartitem.css'
import { connect } from 'react-redux'
import { actCloseCartItem } from '../../actions/index'

class CartItem extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            CartItems: [],
        }
    }

    closeCartItem = () => {
        this.props.closeCartItem()
    }

    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log(nextProps)
    //     let { statusCartItem } = nextProps
    //     console.log(statusCartItem)
    //     this.setState({
    //         CartItems: [],
    //         status: statusCartItem
    //     })
    // }

    render() {
        // console.log(this.props.statusCartItem.cartItemStatus)
        // let { cartItemStatus } = this.props.statusCartItem
        // console.log(cartItemStatus)
        let { statusCartItem } = this.props
        return (
            <div className={statusCartItem === true ? "cart-item c-show" : "cart-item"}>
                <div className="header">
                    <div className="item-amount">
                        <FontAwesomeIcon className="mr-2" icon={faShoppingBag} />
                        0 item
                    </div>
                    <FontAwesomeIcon icon={faTimes} className="close" onClick={this.closeCartItem} />
                </div>
                <div className="body">
                    {
                        this.state.CartItems.length === 0 && <span style={{
                            fontSize: "15px",
                            fontWeight: "700",
                            color: "rgb(119, 121, 140)",
                            display: "block",
                            width: "100%",
                            textAlign: "center",
                            padding: "40px 0px"
                        }}>
                            Not Products found</span>
                    }
                </div>
                <a className="footer disable-btn" href="#">
                    <span>Checkout</span>
                    <div className="total">
                        $0.00
                    </div>
                </a>
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
        closeCartItem: () => {
            dispatch(actCloseCartItem())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem)