import React, { Component } from 'react';
import { Prompt } from "react-router-dom";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allowLeave: false
        }
    }

    setAllowLeave = allowLeave => this.setState({
        allowLeave
    })

    render() {
        let { allowLeave } = this.state;
        return (

            <div className="row">
                <div>this is contact page</div>

                <button type="button" className="btn btn-default" onClick={() => this.setAllowLeave(true)}>Set allowLeave to true</button>

                <button style={{ marginLeft: 4 }} type="button" className="btn btn-default" onClick={() => this.setAllowLeave(false)}>Set allowLeave to false</button>


                <Prompt when={!allowLeave} message={location => `are you sure you want to go to ${location.pathname}`} />
            </div>

        );
    }
}

export default Contact;