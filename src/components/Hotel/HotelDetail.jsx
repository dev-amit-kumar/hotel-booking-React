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
                    <h1 className="">Hotel Details</h1>
                    <div className="row">
                        <div className="col-md-5">
                            <img src={this.state.hotel_data.thumb} alt={this.state.hotel_data.name}/>
                        </div>
                        <div className="col-md-7">
                            <h1 className="text-center mb-4">{this.state.hotel_data.name}</h1>
                            <p><strong>Address: </strong>{this.state.hotel_data.address}</p>
                            <p><strong>Location: </strong>{this.state.hotel_data.locality}</p>
                            <p><strong>City: </strong>{this.state.hotel_data.city_name}</p>
                            <p><strong>Cost: </strong>{this.state.hotel_data.cost}</p>
                            <form>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Choose room type: </label>
                                    <div className="col-sm-9">
                                        {this.state.hotel_data && this.state.hotel_data.type.map((data, index) => {
                                            return (<button key={index} className="btn btn-primary m-1" id={data.roomtype}>{data.name}</button>)
                                        })}
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Start Date</label>
                                        <input type="date" class="form-control" id="inputEmail4"/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4">End Date</label>
                                        <input type="date" class="form-control" id="inputPassword4"/>
                                    </div>
                                </div>
                                <center>

                                <button className="btn btn-success btn-lg pl-4 pr-4">Book</button>
                                </center>
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