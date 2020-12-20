import { Link } from 'react-router-dom'
import '../../css/HotelDisplay.css'

const HotelDisplay = (props) =>{
    return(
        <div className="col-md-3 mb-4">
            <div className="hotel_data card">
                <Link to={`/hotel/${props.hotel_data._id}`}>
                    <img src={props.hotel_data.thumb} alt={props.hotel_data.name} />
                    <div className="card-body">
                        <h6 className="text-center text-dark"><strong>{props.hotel_data.name}</strong></h6>
                        <span className="text-primary"><strong>City: </strong>{props.hotel_data.city_name}</span>
                        <span className="float-right text-danger"><strong>&#8377; </strong>{props.hotel_data.cost}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HotelDisplay