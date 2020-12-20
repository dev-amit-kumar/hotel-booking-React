import React from 'react'
import HotelDisplay from './HotelDisplay'
const UrlTrip = 'https://developerfunnel.herokuapp.com/'

class HotelList extends React.Component{
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
                        Sorting and filter to be added soon
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
        var tripId = this.props.match.params.id
        if (tripId === 'hotels'){
            tripId = tripId + this.props.location.search
        }
        fetch(`${UrlTrip}${tripId.replace('+','/')}`,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotel_list: data})
        })
    }
}

export default HotelList