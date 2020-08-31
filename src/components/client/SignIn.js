import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { actOpenFormSignUp } from '../../actions/index'
import '../../css/client/Authform.css'
import { Redirect } from 'react-router-dom'
import { browserHistory } from 'react-router';
class SignIn extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            email: '',
            password: ''
        }
    }

    onHandleChange = (e) => {
        let target = e.target
        let name = target.name
        let value = target.value
        this.setState({
            [name]: value
        })
        console.log(this.state.email, this.state.password)
    }

    onSubmit = (e) => {
        e.preventDefault()
        let { email, password } = this.state
        let account = {
            email,
            password
        }
        console.log(account)
        this.props.onLogin(account)
        this.props.onCloseModal()
    }

    render() {
        let { email, password } = this.state
        return (
            <div className="Authform">
                <div className='header'>
                    <h1>Welcome Back</h1>
                    <p>Login with your email & password</p>
                </div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="email" id="Email" placeholder="EX: doanhtuan@gmail.com" value={email} onChange={this.onHandleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input type="password" name="password" id="Password" placeholder="EX: tuan123" value={password} onChange={this.onHandleChange} />
                    </FormGroup>
                    <Button size="lg" block type="submit" className="btn">Continue</Button>
                </Form>
                <div className="footer">
                    Don't have an account?
                    &nbsp;<span className="signup" onClick={this.props.onOpenFormSignUp}>Sign up</span>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onOpenFormSignUp: () => {
            dispatch(actOpenFormSignUp())
        }
    }
}

export default connect(null, mapDispatchToProps)(SignIn)