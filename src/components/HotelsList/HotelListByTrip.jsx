import React from 'react'
import HotelDisplay from './HotelDisplay'
import RoomFilter from '../Filter/RoomFilter'
import CostFilter from '../Filter/CostFilter'
import CityFilter from '../Filter/CityFilter'
import CostSort from '../Sort/Cost'

const UrlTrip = 'https://developerfunnel.herokuapp.com/hotellist'

class HotelList extends React.Component{
    constructor(){
        super()
        this.state = {
            hotel_list: '',
            costRange: '',
            roomType: '',
            cityId:''
        }
    }

    setRoomType(filterRoom){
        this.setState({roomType:filterRoom})
        this.loadHotelList(filterRoom, this.state.costRange)
    }

    setCost(filterCost){
        this.setState({costRange:filterCost})
        this.loadHotelList(this.state.roomType, filterCost)
    }

    setCity(filterCity){
        this.setState({cityId:filterCity})
    }

    setCostSort(sortedCost){
        this.setState({hotel_list:sortedCost})
    }

    render(){
        if(this.state.hotel_list){
            var hotel = this.state.hotel_list
            if (this.state.cityId){
                hotel = this.state.hotel_list.filter(hotel => hotel.city === this.state.cityId)
            }
            var inner_data = ''
            if(hotel.length > 0){
                inner_data = hotel.map((hotel, idx) => {
                    return (<HotelDisplay key={idx} hotel_data={hotel}/>)
                })
            }
            else{
                inner_data = <div className="card w-100 text-white bg-danger m-4">
                                    <div className="card-body text-center">
                                        <span>No hotel found. Change the filter options</span>
                                    </div>
                                </div>
            }
            return(
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2 all_filter">
                            <div className="card">
                                <h4 className="text-center">Filter</h4>
                                <RoomFilter RoomType={(data) => {this.setRoomType(data)}}/>
                                <CostFilter costType={(data) => {this.setCost(data)}}/>
                                <CityFilter cityFilter={(data) => {this.setCity(data)}}/>
                            </div>
                            <br/>
                            <div className="card">
                                <h4 className="text-center">Sort</h4>
                                <CostSort all_hotel={(data) => {this.setCostSort(data)}} hotel_list={this.state.hotel_list}/>
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="row">
                                {inner_data}
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

    loadHotelList(roomType, costRange){
        var tripId = this.props.match.params.id
        var url = `${UrlTrip}/${tripId}`
        if(roomType && costRange){
            url = `${url}?roomtype=${roomType}&${costRange}`
        }
        else if(roomType){
            url = `${url}?roomtype=${roomType}`
        }
        else if(costRange){
            url = `${url}?${costRange}`
        }
        fetch(url,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotel_list: data})
        })
    }

    componentDidMount(){
        var tripId = this.props.match.params.id
        var url = `${UrlTrip}/${tripId}`
        fetch(url,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotel_list: data})
        })
    }
}

export default HotelList