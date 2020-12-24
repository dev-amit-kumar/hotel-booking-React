import React from 'react'
import HotelDisplay from './HotelDisplay'
import RoomFilter from '../Filter/RoomFilter'
import CostFilter from '../Filter/CostFilter'
import CityFilter from '../Filter/CityFilter'

const UrlTrip = 'https://developerfunnel.herokuapp.com/'

class HotelList extends React.Component{
    constructor(){
        super()
        this.state = {
            hotel_list: ''
        }
    }

    setRoomType(filterRoom){
        this.setState({hotel_list:filterRoom})
    }
    setCost(filterCost){
        this.setState({hotel_list:filterCost})
    }

    render(){
            if(this.state.hotel_list){
                return(
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-2">
                                <p>Filter</p>
                                <RoomFilter RoomType={(data) => {this.setRoomType(data)}}/>
                                <br/>
                                <CostFilter costType={(data) => {this.setCost(data)}}/>
                                <br/>
                                <CityFilter/>
                            </div>
                            <div className="col-10">
                                <div className="row">
                                    {this.state.hotel_list.map((hotel, idx) => {
                                        return <HotelDisplay key={idx} hotel_data={hotel}/>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else{
                return (
                    <div className="full-cover">
                        <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                        <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )
            }
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