import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import Preloader from '../../components/Preloader';

class index extends Component {

   state = {
       houses : []
   }
   
   async componentDidMount () {
    console.log(this.props.match.params.city)
       const city = this.props.match.params.city
       
       const res = await axios.get(`/house/search/${city}`)
       this.setState({
           houses : res.data
       })
    }
    
    render() {
        const {houses} = this.state
        console.log(houses)
        const maphouses = houses.map((house =>
         <div className = "col-lg-4 col-md-6">
          <Card house = {house}/>
         </div> ))
        
        return (
           !this.state.houses ?  <Preloader/> : 
           <div className="container" style={{marginTop : '75px'}}>
            <div className = "row">
             {maphouses}  
            </div>
           </div> 
        )
    }
}

export default index
