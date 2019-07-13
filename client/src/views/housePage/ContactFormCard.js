import React, { Component } from 'react';

export default class ContactFormCard extends Component {

    state = {
        name : "",
        email : "",
        message : ""
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    render() {
        return (
            <div className="contact-form-card">
                <h5>Are you interested?</h5>
                <p>Fill the form and our executive will get to you shortly</p>
                <form>
                    <input
                    name = "name"
                    type= "text" 
                    placeholder="Your name"
                    value = {this.state.name}
                    onChange = {this.state.onChange}
                    />
                    <input
                    name = "email" 
                    type="text" 
                    placeholder="Your email"
                    value = {this.state.email}
                    onChange = {this.state.onChange}
                    />
                    <textarea placeholder="Your question"></textarea>
                    <button onclick>SEND</button>
                </form>
            </div>
        )
    }
}







