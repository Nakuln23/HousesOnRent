import React, { Component } from 'react';
// import axios from 'axios';
import {Redirect,Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import axios from 'axios';

class Login extends Component {

  state = {
    email: "",
    password: "",
} 

onChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}

handleSubmit =  (e) => {
    e.preventDefault();
    const user = {
        email : this.state.email,
        password : this.state.password
    }
    this.postUser(user)
}
postUser = (user) => {
    axios({
      method: 'post',
      url: '/user/auth/login',
      data : user,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then((res) => {
        console.log(res)
        this.setToken(res.token)
       // this.props.history.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
}
setToken = (token) => {
  localStorage.setItem('id_token', token)
}
  
  render() {
    
    return (
  <div className="login" style={{margin:"150px"}}>
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
             className="btn btn-block mt-4"
             />
          </form>
        </div>
       
      </div>
      <div style={{ marginLeft:"300px", marginTop:"20px"}}>
    </div>
   </div>
  </div>
    )
  }
}


export default withRouter(Login)