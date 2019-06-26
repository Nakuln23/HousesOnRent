import React, { Component } from 'react'
import {fetchHousesCity} from '../../api'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
class Search extends Component {
    state = {
        
        houses : []
    }

    componentDidMount = () => {
        fetchHousesCity(this.props.match.params.city)
        .then((res)=> { 
        console.log(res)
        this.setState({
           houses : res
        })}
        )}
  
    render() {
        console.log(this.props)
        const {houses} = this.state
    return (
        <section className="mapping-cards" style={{margin:"100px"}}>
          <div className="container">
         <div className="row">

             {houses.map((house)=>(
                 <div key={house._id}>
                  <div className="col-sm-4" >
  	  	           <div className="card" style={{width: "20rem"}}>
                     <img src={house.picture} className="card-img-top" alt="..."/>
                      <div className="card-body">
                       <h5 className="card-title">{house.name}</h5>
                       <h6 className="h6">Rs.{house.price}</h6>
                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <Link to ={`/params/${house._id}`} className="btn btn-primary">Show Details</Link>
                      </div>
                    </div>
  	              </div>
                 </div>
             ))}
          </div>
          </div>

          </section>
    )
  }
}

export default withRouter(Search)