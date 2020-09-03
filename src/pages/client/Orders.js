import React, { Component } from 'react'
import Nav from '../../components/client/Nav'
import UserSideBar from '../../components/client/UserSideBar'
import OrderDetails from '../../components/client/OrderDetails'
import Order from '../../components/client/Order'
import '../../css/client/Orders.css'
import { connect } from 'react-redux'
class Orders extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            indexOrderSelected: 0
        }
    }

    showOrder = (orders) => {
        let result = null
        if (orders.length > 0) {
            result = orders.map((order, index) => {
                return <Order key={index} index={index} order={order} onGetIndexOrderSelected={this.getIndexOrderSelected} indexOrderSelected={this.state.indexOrderSelected} />
            })
        }
        return result
    }

    getIndexOrderSelected = (index) => {
        this.setState({
            indexOrderSelected: index
        })
    }

    render() {
        let { orders } = this.props
        let { indexOrderSelected } = this.state
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
                                {/* <Order />
                                <Order />
                                <Order />
                                <Order /> */}
                                {this.showOrder(orders)}
                            </div>
                            <OrderDetails orders={orders} indexOrderSelected={indexOrderSelected} />
                        </div>
                    }
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order
    }
}

export default connect(mapStateToProps, null)(Orders)