import React, { Component } from 'react'
import Nav from '../../components/client/Nav'
import UserSideBar from '../../components/client/UserSideBar'
import OrderDetails from '../../components/client/OrderDetails'
import Order from '../../components/client/Order'
import '../../css/client/Orders.css'

class Orders extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            orders: []
        }
    }
    render() {
        let { orders } = this.state
        return (
            <div>
                <Nav />
                <div className="orders user-container">
                    <div>
                        <UserSideBar />
                    </div>
                    {
                        <div className="order-container">
                            <div className="my-order mx-4">
                                <h3 className="bt-header">My Order</h3>
                                {/* {
                                    orders.length === 0 && <span style={{
                                        fontSize: "15px",
                                        fontWeight: "700",
                                        color: "rgb(119, 121, 140)",
                                        display: "block",
                                        width: "100%",
                                        textAlign: "center",
                                        padding: "40px 0px"
                                    }}>No Order Found</span>
                                } */}
                                <Order />
                                <Order />
                                <Order />
                                <Order />
                            </div>
                            <OrderDetails />
                        </div>
                    }
                </div>
            </div>

        )
    }
}

export default Orders