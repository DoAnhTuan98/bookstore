import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import '../../css/client/Authform.css'
class SignIn extends Component {
    constructor(pros) {
        super(pros)

    }
    render() {
        return (
            <div className="Authform">
                <div className='header'>
                    <h1>Welcome Back</h1>
                    <p>Login with your email & password</p>
                </div>
                <Form>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="email" id="Email" placeholder="EX: demo@demo.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input type="password" name="password" id="Password" placeholder="EX: demo123" />
                    </FormGroup>
                    <Button size="lg" block type="submit" className="btn">Continue</Button>
                </Form>
                <div className="footer">
                    Don't have an account?
                    &nbsp;<span className="signup">Sign up</span>
                </div>
            </div>
        )
    }
}

export default SignIn