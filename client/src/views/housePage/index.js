import React, { Component } from 'react';
import Title from '../../components/Title';
import Carousel from './Carousel';
import axios from 'axios';
import HouseDetail from './HouseDetail';
import AuthorCard from './AuthorCard';
import ContactFormCard from './ContactFormCard';
import RelatedHouses from './RelatedHouses';

export default class index extends Component {

    state = {
        house : {},
        relatedHouses : []
    }
   
    async componentDidMount() {
        console.log(this.props)
        const house_id = this.props.match.params.house_id
        const house = await axios.get(`/house/params/${house_id}`)
        const relatedHouses = await axios.get(`/house/search/${house.data.city}`)
        this.setState({
            house : house.data,
            relatedHouses : relatedHouses.data
        })
        //const relatedHouses = await axios.get('')
        
    }
    
    render() {
        const {house, relatedHouses} = this.state
        return (
            <section className="page-section" style={{marginTop : "75px"}}>
               <div className="container">
                   <div className="row">
                       <div className="col-lg-8 single-list-page">
                           <Carousel images = {house.picture}/>
                           <HouseDetail house={house}/>
                        </div>
                     
                    {/* <!-- sidebar --> */}
                       <div className="col-lg-4 col-md-7 sidebar">
                           <ContactFormCard/>
                           <RelatedHouses relatedHouses = {relatedHouses}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
