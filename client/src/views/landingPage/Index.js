import React, { Component } from 'react';
import RecentHouses from './RecentHouses';
import Services from './Services';
import Title from '../../components/Title';
import FeaturedRoom from './FeaturedRoom';
import PopularPlace from './PopularPlace';
import axios from 'axios';
import Hero from './Hero';

export default class Index extends Component {
  state = {
    recentHouses : [],
    featuredHouses : [],
  }

  async componentDidMount () {
    const res = await axios.get('/house/recenthouses')
    const res2 = await axios.get('/house/featuredhouses')
    console.log(res)
    this.setState({
      recentHouses : res.data,
      featuredHouses : res2.data,
    })
  }
  
  render() {
    const {featuredHouses, recentHouses} = this.state
    console.log(featuredHouses)
    return (
      <>
      <Hero/>
      <RecentHouses houses={recentHouses}/>
      <Services/>
      <FeaturedRoom houses={featuredHouses}/>
      <PopularPlace/>
      </>
    )
  }
}


