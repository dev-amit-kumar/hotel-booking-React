import { Link } from 'react-router-dom'
import '../css/HotelDisplay.css'

const HotelDisplay = (props) =>{
    console.log(props)
    return(
        <div className="card hotel_data">
            <Link to={`/hotel/${props.hotel_data._id}`}>
                <img src={props.hotel_data.thumb} alt={props.hotel_data.name} />
                <div className="card-body">
                    <p><strong>{props.hotel_data.name}</strong></p>
                    <p><strong>City: </strong>{props.hotel_data.city_name}</p>
                    <p><strong>Locality: </strong>{props.hotel_data.locality}</p>
                    <p><strong>&#8377; </strong>{props.hotel_data.cost}</p>
                </div>
            </Link>
        </div>
    )
}

export default HotelDisplay