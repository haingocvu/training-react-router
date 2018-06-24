import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUserName: '',
            txtPassword: ''
        }
    }

    handleChange = e => {
        let {target} = e;
        let {name, value} = target;
        this.setState({
            [name] : value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        let {txtUserName, txtPassword} = this.state;
        if(txtUserName === 'admin' && txtPassword === '123') {
            localStorage.setItem('user', JSON.stringify(this.state))
            // return (
            //     <Redirect to="/products" />
            // )
        }
    }
    
    render() {
        let user = localStorage.getItem('user');
        console.log(user);
        if(user !== null) {
            return (
                <Redirect to="/products" />
            )
        }
        let {txtUserName, txtPassword} = this.state;
        return (    
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-offset-lg-3">
                    <form onSubmit={this.handleSubmit}>
                        <legend>Login</legend>
                    
                        <div className="form-group">
                            <label>username</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="txtUserName"
                                value={txtUserName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                name="txtPassword"
                                value={txtPassword}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>    
                </div>
            </div>
            
        )
    }
}

export default Login;