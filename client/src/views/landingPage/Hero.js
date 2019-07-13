import React, { Component } from 'react'
import {withRouter} from 'react-router'

class Hero extends Component {
    state={
        city : ''
    }
    handleSubmit = ()=>{
        this.props.history.push(`/search/${this.state.city}`)
    }
    handleChange = input => e => {
        this.setState({
            [input] : e.target.value
        })
    }
    render() {
        return (
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 text-center">
                        <h1 className=" display-2 font-weight-light">Renting Done Right. Finally.</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input 
                             className="form-control mr-sm-2 search-slt mt-5"  
                             name="city" 
                             onChange={this.handleChange("city")} 
                             type="search" 
                             placeholder="Where do you want to live?" 
                             aria-label="Search">
                            </input>
                            <p className="lead mt-5">Market your property to millions</p>
                            <button id="rounded-btn" type="submit" className="btn px-4 py-2">List Your Rental </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}

export default withRouter(Hero)
