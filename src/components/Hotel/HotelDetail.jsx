import React from 'react'
import '../../css/HotelDetail.css'
const urlHotelDetail = 'https://developerfunnel.herokuapp.com/hotelsdetails/'
class HotelDetail extends React.Component {
    constructor(){
        super()
        this.state ={
            hotel_data: ''
        }
    }

    render(){
        return(
            <div className="hotel_detail container-fluid mt-4">
                    <h1 className="ml-4">Hotel Details</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={this.state.hotel_data.thumb} alt={this.state.hotel_data.name}/>
                        </div>
                        <div className="col-md-6 card p-0">
                            <div className="card-body">
                                <h3 className="card-title">{this.state.hotel_data.name}</h3>
                                <p><strong>Address: </strong>{this.state.hotel_data.address}</p>
                                <p><strong>Location: </strong>{this.state.hotel_data.locality}</p>
                                <p><strong>City: </strong>{this.state.hotel_data.city_name}</p>
                                <p><strong>Cost: </strong>{this.state.hotel_data.cost}</p>
                            </div>
                            <hr/>
                            <form className="p-4">
                                <h4>Booking Details</h4>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Start Date</label>
                                        <input type="date" className="form-control" id="inputEmail4"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">End Date</label>
                                        <input type="date" className="form-control" id="inputPassword4"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Room type: </label>
                                    <div className="col-sm-9">
                                        {this.state.hotel_data && this.state.hotel_data.type.map((data, index) => {
                                            return (<button key={index} className="btn btn-light btn-outline-info m-1" id={data.roomtype}>{data.name}</button>)
                                        })}
                                    </div>
                                </div>
                                <button className="btn btn-success btn-lg pl-4 pr-4">Go to Booking</button>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }
    
    componentDidMount(){
        fetch(`${urlHotelDetail}${this.props.match.params.id}`,{method:'GET'})
        .then(res => res.json())
        .then(data => this.setState({
            hotel_data: data[0]
        }))
    }
    
    
}
export default HotelDetail