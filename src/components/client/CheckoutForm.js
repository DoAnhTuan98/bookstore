import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import '../../css/client/CheckoutForm.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
class CheckoutForm extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            name: 'Đỗ Anh Tuấn',
            email: 'doanhtuan@gmail.com',
            address: 'số 2 Minh Khai',
            city: 'Hà Nội',
            district: 'Hai Bà Trưng',
            phone: '0965432033'
        }
    }
    render() {
        let { name, email, address, city, district, phone } = this.state
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
                <Form>
                    <div className="billing-address">
                        <h3 className="bt-header">Billing Address</h3>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="email" name="email" id="name" autoComplete="off" value={name} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" value={email} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="email" name="email" id="address" value={address} />
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
                    <h3>Select Payment Option</h3>
                    <FormGroup>
                        <Input
                            type="radio"
                            id="cash"
                            name="payment"
                            value="cash"


                            autoComplete="off"
                        />{' '}
                        <Label for="cash" check>
                            <FontAwesomeIcon icon={faMoneyBillAlt} />
                            <span>Cash</span>
                        </Label>
                    </FormGroup>
                </div>
            </div>
        )
    }
}

export default CheckoutForm