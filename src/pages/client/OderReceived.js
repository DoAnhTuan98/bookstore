import React, { Component } from 'react'
import Nav from '../../components/client/Nav'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../css/client/OrderReceived.css'
class OrderReceived extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="order-received user-container">
                    <div className="user-wrapper">
                        <div className="btn-back-to-home">
                            <Button>
                                <Link to="#">Back to Home</Link>
                            </Button>
                        </div>
                        <div className="received mb-5">
                            <h3 className="bt-header">Oder Received</h3>
                            <p className="mb-4">Thank you. Your order has been received</p>
                            <div className="info">
                                <div className="info-data">
                                    <div className="info-header">Order Id</div>
                                    <p>5f428a57481824001791e99c</p>
                                </div>
                                <div className="info-data">
                                    <div className="info-header">Date</div>
                                    <p>August 23, 2020</p>
                                </div>
                                <div className="info-data">
                                    <div className="info-header">Total</div>
                                    <p>$52.00</p>
                                </div>
                                <div className="info-data">
                                    <div className="info-header">Payment Method</div>
                                    <p>Cash On Delivery</p>
                                </div>
                            </div>
                        </div>
                        <div className="detail mb-5">
                            <h3 className="bt-header">Order Details</h3>
                            <div className="detail-info">
                                <div className="info-header m-0">Total Item</div>
                                <p>1 Item</p>
                            </div>
                            <div className="detail-info">
                                <div className="info-header m-0">Order Time</div>
                                <p>August 23, 2020 3:25 PM</p>
                            </div>
                            <div className="detail-info">
                                <div className="info-header m-0">Delivery Location</div>
                                <p>Minh Khai,Hai Ba Trung,Thanh Pho Ha Noi</p>
                            </div>
                        </div>
                        <div className="amount detail">
                            <h3 className="bt-header">Total Amount</h3>
                            <div className="detail-info">
                                <div className="info-header m-0">Sub Total</div>
                                <p>$52.00</p>
                            </div>
                            <div className="detail-info">
                                <div className="info-header m-0">Payment Method</div>
                                <p>Cash On Delivery</p>
                            </div>
                            <div className="detail-info">
                                <div className="info-header m-0">Total</div>
                                <p>$52.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderReceived