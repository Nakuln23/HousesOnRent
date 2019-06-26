import React, { Component } from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom'
import {withRouter} from 'react-router'
class Register extends Component {

    state = {
        name : "",
        email : "",
        password : "",
        redirectToReferrer: false
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email : this.state.email,
            password : this.state.password
        }
        this.postUser(user)
    }
    AuthState = ()=> {
      this.setState({redirectToReferrer: true})
    }
    
   postUser =(user)=>{
  console.log("hello")
  axios({
    method: 'post',
    url: 'http://localhost:5000/user/register',
    data : user,
    config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
}

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;
    return (
        <div className="register" style={{marginTop:"50px"}}>
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