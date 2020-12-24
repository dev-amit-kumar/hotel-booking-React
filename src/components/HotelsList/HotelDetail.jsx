import React from 'react'
import '../../css/HotelDetail.css'

const urlHotelDetail = 'https://developerfunnel.herokuapp.com/hotelsdetails/'
class HotelDetail extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            hotel_data: ''
        }
    }

    render(){
        if(this.state.hotel_data){
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
                                <p><strong>Cost: &#8377;</strong>{this.state.hotel_data.cost}</p>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label"><strong>Room type: </strong></label>
                                    <div className="col-sm-9">
                                        {this.state.hotel_data.type.map((data, index) => {
                                            return (<p key={index} className="btn btn-light btn-outline-info m-1" id={data.roomtype}>{data.name}</p>)
                                        })}
                                    </div>
                                </div>
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
        fetch(`${urlHotelDetail}${this.props.match.params.id}`,{method:'GET'})
        .then(res => res.json())
        .then(data => this.setState({
            hotel_data: data[0]
        }))
    }
}
export default HotelDetail