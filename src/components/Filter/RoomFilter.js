import React,{Component} from 'react';
import '../../css/Filter.css'

const rurl = "https://developerfunnel.herokuapp.com/hotellist";

class RoomFilter extends Component{

    filterLogic = (event) => {
        let roomNumber = event.target.value;
        let tripId = sessionStorage.getItem('tripid');
        let roomurl;
        if(roomNumber === ""){
            roomurl = `${rurl}/${tripId}`
        }else{
            roomurl = `${rurl}/${tripId}?roomtype=${roomNumber}`
        }
        fetch(roomurl, {method: 'GET'})
        .then((data) => data.json())
        .then(data => {
            this.props.RoomType(data)
        })
    }

    render(){
        return(
            <React.Fragment>
                <h4><b>Room Filter</b></h4>
                <div className="filter" onChange={this.filterLogic}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="room"/>Deluxe Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="room"/>Premium Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="room"/>Travel Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="room"/>Semi Delux Room
                    </label>
                </div>
            </React.Fragment>
        )
    }
}


export default RoomFilter