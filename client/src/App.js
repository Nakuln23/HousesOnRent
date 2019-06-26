import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Footer from './components/layout/Footer';
import Search from './components/search/Search';
import House from './components/house/House';
function PrivateRoute({ component: Component, authed, ...rest }) {
  console.log("private route", Component, authed)
  return (
    <Route
      {...rest}
      render={(props) => authed === true
           ? <Component {...props} /> : <Redirect to={{ pathname: '/login',
           state: { from: props.location } }} />}
    />
  )
}

class App extends React.Component{
  state={
    authed :false 
  }
  loginHandler = ()=> {
    this.setState({
      authed: true
    })
  }
  registerHandler = ()=> {
    this.setState({
      authed: true
    })
  }
  logoutHandler=()=>{
    this.setState({
      authed: false
    })
  }
  render(){
    return(
      <Router>
      <div>
       <Navbar authed={this.state.authed} logoutHandler={this.logoutHandler}/>
       <Switch>
       <Route exact path="/" component={Landing} />
       <Route  path='/register' render={()=> <Register  authed={this.state.authed} registerHandler={this.registerHandler}/>}/>
        <Route  path='/login' render={()=> <Login authed={this.state.authed} loginHandler={this.loginHandler} />}/>
        <Route exact path = '/search/:city' component={Search}/>
        <PrivateRoute exact authed={this.state.authed} path='/params/:house_id' component={House}/>
        </Switch>
       <Footer/>
      </div>
    </Router>
    )
  }
}

export default App
