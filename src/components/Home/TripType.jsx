import React from 'react'
import {Link} from 'react-router-dom'
import '../../css/TripType.css'

const TripType = (props) => {
    return(
        <div className="container-fluid tripType">
            <h2><i className="fa fa-chevron-right" aria-hidden="true"></i>Plan your trip by type</h2>
            <div className="row">
                {
                    props.tripTypeData.map((trip,idx) => {
                        return (
                            <div className="col-12 col-md-3 mb-2" key={idx}>
                                <div className="card shadow-lg">
                                    <Link to={`/hotellist/${trip.trip}`}>
                                        <img src={trip.image} className="card-img-top" alt={trip.name}/>
                                        <div className="card-body">
                                            <h4 className="text-center text-dark">{trip.name} Trip</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TripType