import React, { Component } from 'react'
import { Button, Modal } from 'reactstrap'
import SignIn from './SignIn'
class Authform extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            modal: false
        }
    }
    toggle = () => {
        this.setState({
            modal: true
        })
    }
    render() {
        return (
            <div className="auth-btn">
                <Button onClick={this.toggle}>Sign In</Button>
                <Modal>
                    <SignIn />
                </Modal>
            </div>
        )
    }
}

export default Authform