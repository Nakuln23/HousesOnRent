import React, { Component } from 'react'
import axios from 'axios'

const Logout = ()=> {

    axios.get('http://localhost:5000/user/logout')
}

export default Logout