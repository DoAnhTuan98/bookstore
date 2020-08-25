import React, { Component } from 'react'

class Order extends Component {
    constructor(pros) {
        super(pros)

    }
    render() {
        return (
            <div className="order">
                <div className="w-100 order-active">
                    <div className="header">Order#1</div>
                    <div className="body">
                        <div className="order-info">
                            Order Date:
                            <span>May 29, 2020</span>
                        </div>
                        <div className="order-info">
                            Order Id:
                            <span>5ed0a7b1b75aab1b3ebbf9e1</span>
                        </div>
                        <div className="order-info">
                            Total Price:
                            <span>$0.00</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Order