import React, { Component } from 'react'
import { Progress, Table } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"
class OrderDetails extends Component {
    showItems = (cartItems) => {
        let result = null
        result = cartItems.map((cartItem, index) =>
            <tr key={index}>
                <th scope="row">
                    <div className="img-wrapper">
                        <img src={cartItem.product.img} alt="" />
                    </div>
                </th>
                <td>
                    <div className="title">{cartItem.product.name}</div>
                    <div className="price">${cartItem.product.price}</div>
                </td>
                <td>
                    {cartItem.quantity}
                </td>
                <td>${cartItem.quantity * cartItem.product.price}.00</td>
            </tr>
        )
        return result
    }
    render() {
        let { orders, indexOrderSelected } = this.props
        let orderSelected = null
        // if (indexOrderSelected) {
        //     orderSelected = orders[indexOrderSelected]
        // }
        orderSelected = orders[indexOrderSelected]
        // else {
        //     orderSelected = orders[0]
        // }
        console.log(orderSelected)
        let cartItems = orderSelected.cartItem
        console.log(cartItems)
        return (
            <div className="order-detail">
                <h3 className="bt-header">Order Details</h3>
                {/* {
                    order.length === 0 ? <span style={{
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "rgb(119, 121, 140)",
                        display: "block",
                        width: "100%",
                        textAlign: "center",
                        padding: "40px 0px"
                    }}>No Order Found</span> : */}
                <React.Fragment>
                    <div className="details">
                        <div className="address">
                            <div className="title">Delivery Address</div>
                            <span>{orderSelected.address}</span>
                            <div className="title mt-4">Payment Method</div>
                            <span>{orderSelected.payment === 'card' ? 'Online Payment' : 'Cash On Delivery'}</span>
                        </div>
                        <div className="info">
                            <div>
                                Sub Total
                                    <span>${orderSelected.totalPrice}</span>
                            </div>
                            <div>
                                Discount
                                    <span>$0.00</span>
                            </div>
                            <div>
                                Delivery Free
                                    <span>$0.00</span>
                            </div>
                            <div>
                                Total
                                    <span>${orderSelected.totalPrice}</span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-wrapper">
                        <Progress value="75">
                            <div className="des">
                                <div className="check-btn">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <div className="text">Order Received</div>
                            </div>
                            <div className="des">
                                <div className="check-btn">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <div className="text">Order On The Way</div>
                            </div>
                            <div className="des">
                                <div className="check-btn not-completed">
                                    {/* <FontAwesomeIcon icon={faCheck} /> */}
                                        3
                                    </div>
                                <div className="text">Order Received</div>
                            </div>
                        </Progress>
                    </div>
                    <div className="items">
                        <Table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Items</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <th scope="row">
                                        <div className="img-wrapper">
                                            <img src="https://res.cloudinary.com/dofqucuyy/image/upload/v1596887706/firewatch-5120x2880-4k-8k-art-forest-13610_yy7fad.jpg" alt="" />
                                        </div>
                                    </th>
                                    <td>
                                        <div className="title">The Princeton Childrens Book test</div>
                                        <div className="price">$70.00</div>
                                    </td>
                                    <td>
                                        1
                                    </td>
                                    <td>${1 * 70}.00</td>
                                </tr> */}
                                {this.showItems(cartItems)}
                            </tbody>
                        </Table>
                    </div>
                </React.Fragment>
                {/* } */}
            </div>
        )
    }
}

export default OrderDetails