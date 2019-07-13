import React, { Component } from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom'
import {withRouter} from 'react-router'
class Register extends Component {

    state = {
        name : "",
        email : "",
        password : "",
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email : this.state.email,
            password : this.state.password
        }
        this.postUser(user)
    }

    postUser = (user) => {
        axios({
            method: 'post',
            url: '/user/register',
            data : user,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then((res) => {
                this.props.history.push('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    render() {
    return (
        <div className="register" style={{margin:"150px"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Register for your HousesOnRent account</p>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control form-control-lg" 
                  placeholder="Full Name" 
                  name="name"
                  value={this.state.name}
                  onChange = {this.onChange} 
                  /> 
                </div>
                <div className="form-group">
                  <input 
                  type="email" 
                  className="form-control form-control-lg" 
                  placeholder="Email Address" 
                  name="email"
                  value={this.state.email}
                  onChange = {this.onChange} 
                  /> 
                </div>
                <div className="form-group">
                  <input 
                  type="password" 
                  className="form-control form-control-lg" 
                  placeholder="Password" 
                  name="password"
                  value ={this.state.password}
                  onChange = {this.onChange} 
                  />
                </div>
                 <input 
                 type="submit" 
                 className="btn btn-info btn-block mt-4"
                 />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(Register)