import React from 'react'
import '../../css/Search.css'
import {withRouter} from 'react-router-dom'

const Search = (props) =>{

    const cityChangeHandler = (e) => {
        if(e.target.value){
            props.history.push(`/hotellist/city=${e.target.value}`)
        }
    }

    return(
        <>
            <div className="search-bar">
                <h1 className="text-white shadow-lg">Search with us</h1>
                <select className="form-control shadow-lg mt-3" onChange={cityChangeHandler}>
                    <option value="">Select City</option>
                    {
                        props.allCity && props.allCity.map((city, index) => {
                            return(<option value={city._id} key={index}>{city.city_name}</option>)
                        })
                    }
                </select>
            </div>
        </>
    )
}

export default withRouter(Search)