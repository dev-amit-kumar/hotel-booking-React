import React from 'react'
import HotelDisplay from '../HotelDisplay'
import '../../css/TripList.css'
const UrlHotelByCity = 'https://developerfunnel.herokuapp.com/hotels?city='

class Index extends React.Component{
    constructor(){
        super()
        this.state = {
            hotel_list: ''
        }
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        Sort
                    </div>
                    <div className="col-10">
                        <div className="row">
                            {this.state.hotel_list && this.state.hotel_list.map((hotel, idx) => {
                                return <HotelDisplay key={idx} hotel_data={hotel}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        const tripId = this.props.match.params.id
        fetch(`${UrlHotelByCity}${tripId}`,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotel_list: data})
        })
    }
}

export default Index