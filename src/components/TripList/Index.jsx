import React from 'react'
import HotelDisplay from '../HotelDisplay'
import '../../css/TripList.css'
const UrlTrip = 'https://developerfunnel.herokuapp.com/hotellist/'

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
                    <div className="col-10 all-hotel-container">
                        {this.state.hotel_list && this.state.hotel_list.map((hotel, idx) => {
                            return <HotelDisplay key={idx} hotel_data={hotel}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        const tripId = this.props.match.params.id
        fetch(`${UrlTrip}${tripId}`,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotel_list: data})
        })
    }
}

export default Index