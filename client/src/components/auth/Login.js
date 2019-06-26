import React, { Component } from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom'
import {withRouter} from 'react-router'

class Login extends Component {

  state = {
    email: "",
    password: "",
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
        email : this.state.email,
        password : this.state.password
    }
    this.props.loginHandler()
    this.postUser(user)
    this.AuthState()
    
}
AuthState = ()=> {
  this.setState({redirectToReferrer: true})
}

postUser =(user)=>{
  axios({
    method: 'post',
    url: 'http://localhost:5000/user/login',
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
  <div className="login" style={{marginTop:"50px"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Log In</h1>
          <p className="lead text-center">Sign in to your HousesOnRent account</p>
          <form onSubmit={this.handleSubmit}>
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
      <div style={{ marginLeft:"300px", marginTop:"20px"}}>
      <h5>Or <Link to='/register'>Signup ? </Link></h5>
      </div>
    </div>
  </div>
    )
  }
}


export default withRouter(Login)