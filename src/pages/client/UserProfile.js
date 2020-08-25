import React, { Component } from 'react'

class Userprofle extends Component {
    constructor(pros) {
        super(pros)

    }
    render() {
        return (
            <div className="UserProfile user-container">
                {/* <Alert option="edit" isOpen={isSave} /> */}
                <div>
                    <UserSideBar page="profile" />
                </div>
                {

                    <div className="user-wrapper">
                        <div className="profile mb-5">
                            <h3 className="bt-header">Your Profile</h3>
                            <Form className="AuthForm" onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label for="name">NAME</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value="demo123"
                                        // onChange={handleInput}
                                        required
                                        autoComplete="off"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">EMAIL</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value="demo@demo.com"
                                        // onChange={handleInput}
                                        required
                                        autoComplete="off"
                                    />
                                </FormGroup>
                                <Button type="submit">Save</Button>
                            </Form>
                        </div>
                        <div className="contact mb-5">
                            <h3 className="bt-header">Contact Number</h3>
                            <UserInfo isPhone handleInput={handleInput} handleSubmit={handleSubmit} data={data} />
                        </div>
                        <div className="address">
                            <h3 className="bt-header">Delivery Address</h3>
                            <UserInfo handleInput={handleInput} handleSubmit={handleSubmit} data={data} />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Userprofle