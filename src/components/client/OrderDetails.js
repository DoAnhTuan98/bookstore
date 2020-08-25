import React, { Component } from 'react'
import { Progress, Table } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"
class OrderDetails extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            order: []
        }
    }
    render() {
        let { order } = this.state
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
                            <span>Minh Khai,Hai Ba Trung,Ha Noi</span>
                            <div className="title mt-4">Payment Method</div>
                            <span>Online Payment</span>
                        </div>
                        <div className="info">
                            <div>
                                Sub Total
                                    <span>$0.00</span>
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
                                    <span>$0.00</span>
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
                                <tr>
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
                                </tr>
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