const axios = require('axios')


export const fetchHousesCity = async (city)=> {
    const houseData = await axios.get(`http://localhost:5000/house/search/${city}`)
    // console.log(houseData)
    // console.log(houseData.data)
    return houseData.data
}

export const searchHouse = async (house_id)=> {
    const houseData = await axios.get(`http://localhost:5000/house/params/${house_id}`)
    //console.log(houseData)
    return houseData.data
}

export const Logout =  () => {
    console.log("logout")
    axios.get('http://localhost:5000/user/logout')
}