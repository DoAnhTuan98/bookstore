import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import '../../css/client/Authform.css'
class SignUp extends Component {
    constructor(pros) {
        super(pros)

    }
    render() {
        return (
            <div className="Authform">
                <div className="header">
                    <h1>Sign Up</h1>
                    <p>By signing up, you agree to Pickbazar's</p>
                </div>
                <Form>
                    <FormGroup>
                        <Label for="name">
                            Name
                            <span className="ml-1 text-danger">*</span>
                        </Label>
                        <Input id="name" type="text" name="name" autoComplete="off" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">
                            Email
                            <span className="ml-1 text-danger">*</span>
                        </Label>
                        <Input id="email" type="email" name="email" autoComplete="off" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">
                            Password
                            <span className="ml-1 text-danger">*</span>
                        </Label>
                        <Input id="password" type="password" name="password" autoComplete="off" />
                        {/* {errors.password && <div className="validation">{errors.password}</div>} */}
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">
                            Address
                            <span className="ml-1 text-danger">*</span>
                        </Label>
                        <Input id="address" type="text" name="address" autoComplete="off" />
                        {/* {errors.address && <div className="validation">{errors.address}</div>} */}
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">
                            Phone
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
                    &nbsp;<span className="signin">Sign In</span>
                </div>
            </div>
        )
    }
}

export default SignUp