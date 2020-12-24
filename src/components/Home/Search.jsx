import React from 'react'
import '../../css/Search.css'
import {withRouter} from 'react-router-dom'

const url = 'https://developerfunnel.herokuapp.com/hotels?city='
class Search extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            hotelList: ''
        }
    }

    cityChangeHandler = (e) => {
        fetch(`${url}${e.target.value}`, {method: 'GET'})
        .then((data) => data.json())
        .then(data => this.setState({
            hotelList: data
        }))
    }

    hotelChangeHandler = (e) => {
        this.props.history.push(`/hotel/${e.target.value}`)
    }
    render(){

        return(
            <>
                <div className="search-bar">
                    <h1 className="text-white shadow-lg">Search your destination</h1>
                    <div className="container">
                        <select className="form-control shadow-lg mt-3" onChange={this.cityChangeHandler}>
                            <option value="">Select City</option>
                            {
                                this.props.allCity && this.props.allCity.map((city, index) => {
                                    return(<option value={city._id} key={index}>{city.city_name}</option>)
                                })
                            }
                        </select>
                        <select className="form-control shadow-lg mt-3" onChange={this.hotelChangeHandler}>
                            <option value="">Select Hotel</option>
                            {
                                this.state.hotelList && this.state.hotelList.map((hotel, index) => {
                                    return(<option value={hotel._id} key={index}>{hotel.name}</option>)
                                })
                            }
                        </select>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Search)