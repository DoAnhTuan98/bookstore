import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
class SignUp extends Component {
    constructor(pros) {
        super(pros)

    }
    render() {
        return (
            <div className="AuthForm">
                <div className="header">
                    <h1>Sign Up</h1>
                    <p>By signing up, you agree to Pickbazar's</p>
                </div>
                <Form>
                    <FormGroup>
                        <Label for="name">
                            NAME
                            <span className="ml-1 text-danger">*</span>
                        </Label>
                        <Input id="name" type="text" name="name" autoComplete="off" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">
                            EMAIL
                            <span className="ml-1 text-danger">*</span>
                        </Label>
                        <Input id="email" type="email" name="email" autoComplete="off" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">
                            PASSWORD
                            <span className="ml-1 text-danger">*</span>
                        </Label>
                        <Input id="password" type="password" name="password" autoComplete="off" />
                        {/* {errors.password && <div className="validation">{errors.password}</div>} */}
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">
                            ADDRESS
                            <span className="ml-1 text-danger">*</span>
                        </Label>
                        <Input id="address" type="text" name="address" autoComplete="off" />
                        {/* {errors.address && <div className="validation">{errors.address}</div>} */}
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">
                            PHONE
                            <span className="ml-1 text-danger">*</span>
                        </Label>
                        <Input autoComplete="off" id="phone" type="text" name="phone" />
                        {/* {errors.phone && <div className="validation">{errors.phone}</div>} */}
                    </FormGroup>
                    <Button size="lg" block type="submit">
                        Continue
                    </Button>
                </Form>
                <div className="footer">
                    Already have an account?
                    <span>Sign In</span>
                </div>
            </div>
        )
    }
}

export default SignUp