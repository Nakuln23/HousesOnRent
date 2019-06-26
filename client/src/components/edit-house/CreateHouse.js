import React, { Component } from 'react'

class CreateHouse extends Component {

    state = {
        name="",
        price=""
    }
  render() {
    return (
        <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">List your house for rent</h1>
              <p className="lead text-center">Enter Details</p>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control form-control-lg" 
                  placeholder="Name" 
                  name="name"
                  value={this.state.name}
                  onChange = {this.onChange} 
                  /> 
                </div>
                <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control form-control-lg" 
                  placeholder="city" 
                  name="city"
                  value={this.state.city}
                  onChange = {this.onChange} 
                  /> 
                </div>
                <div className="form-group">
                  <input 
                  type="number" 
                  className="form-control form-control-lg" 
                  placeholder="" 
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

export default CreateHouse