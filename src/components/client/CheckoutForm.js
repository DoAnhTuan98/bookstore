import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import '../../css/client/CheckoutForm.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";

import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';

// const stripe = useStripe()
// const elements = useElements()

class CheckoutForm extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            name: 'Đỗ Anh Tuấn',
            email: 'doanhtuan@gmail.com',
            address: 'số 2 Minh Khai',
            city: 'Hà Nội',
            district: 'Hai Bà Trưng',
            phone: '0965432033',
            payment: 'cash'
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { stripe, elements } = this.props;
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };


    onHandleInput = (e) => {
        let target = e.target
        let name = target.name
        let value = target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        const { stripe } = this.props;
        let { name, email, address, city, district, phone, payment } = this.state
        let { user } = this.props
        console.log(payment)
        return (
            <div className="checkout-form">
                <div className='order-info'>
                    <h3>Your order</h3>
                    <div className="item">
                        <div className="title">Sub Total(1item)</div>
                        <div className="price">$0.00</div>
                    </div>
                    <div className="item">
                        <div className="title">Shipping Free</div>
                        <div className="price">$0.00</div>
                    </div>
                    <div className="item">
                        <div className="title">Total</div>
                        <div className="price">$52.00</div>
                    </div>
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <div className="billing-address">
                        <h3 className="bt-header">Billing Address</h3>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="email" name="email" id="name" autoComplete="off" value={user.name} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" value={user.email} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="email" name="email" id="address" value={user.address} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input type="select" name="select" id="city" value={city}>
                                <option>Tỉnh/Thành Phố</option>
                                <option>Hà Nội</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="district">District</Label>
                            <Input type="select" name="select" id="distric" value={district}>
                                <option>Quận/Huyện</option>
                                <option>Hai Bà Trưng</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone</Label>
                            <Input type="email" name="email" id="phone" value={phone} />
                        </FormGroup>
                    </div>
                </Form>
                <div className="payment">
                    <h3 className="bt-header">Select Payment Option</h3>
                    <FormGroup className="d-flex justify-content-between mb-3 p-0">
                        <Input
                            type="radio"
                            id="cash"
                            name="payment"
                            value="cash"
                            onChange={this.onHandleInput}
                            autoComplete="off"
                        />{' '}
                        <Label for="cash" check>
                            <FontAwesomeIcon icon={faMoneyBillAlt} />
                            <span>Cash</span>
                        </Label>
                        <Input
                            type="radio"
                            id="card"
                            name="payment"
                            value="card"
                            onChange={this.onHandleInput}
                            autoComplete="off"
                        />{' '}
                        <Label for="card" check>
                            <FontAwesomeIcon icon={faCreditCard} />
                            <span>Card</span>
                        </Label>
                    </FormGroup>
                </div>
                {payment === 'card' && <CardElement />}
                <Button type="submit" className="btn w-100" disabled={!stripe}>Proceed to Checkout</Button>
            </div>
        )
    }
}

export default CheckoutForm