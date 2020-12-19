import React from 'react'
import {Link} from 'react-router-dom'
import '../../css/TripType.css'

const TripTypeUrl ="https://developerfunnel.herokuapp.com/booking"

class TripType extends React.Component {
    constructor(){
        super()
        this.state = {
            tripTypeData: ''
        }
    }

    componentDidMount(){
        fetch(TripTypeUrl,{method: 'GET'})
        .then((response) => response.json())
        .then((data) => {
            this.setState({tripTypeData: data})
        })
    }

    render(){
        return(
            <div className="container-fluid tripType">
                <h2><i className="fa fa-chevron-right" aria-hidden="true"></i>Plan your trip by type</h2>
                <div className="row">
                    {
                        this.state.tripTypeData && this.state.tripTypeData.map((trip,idx) => {
                            return (
                                <div className="col-12 col-md-3 mb-2" key={idx}>
                                    <div className="card shadow-lg">
                                        <img src={trip.image} className="card-img-top" alt={trip.name}/>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{trip.name} Trip</h5>
                                            <Link to={`/list/hotellist+${trip.trip}`} className="btn btn-dark shadow-sm">Let's Go</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TripType