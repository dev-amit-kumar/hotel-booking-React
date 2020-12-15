import React from 'react'
import '../../css/Search.css'
import {withRouter} from 'react-router-dom'
const cityUrl = 'https://developerfunnel.herokuapp.com/location'
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allCity: '',
            allHotel: ''
        }
    }

    componentDidMount(){
        fetch(cityUrl,{method: 'GET'})
        .then((response) => response.json())
        .then((city) => {
            this.setState({allCity: city})
        })
    }

    cityChangeHandler = (e) => {
        if(e.target.value){
            this.props.history.push(`/find_hotel/${e.target.value}`)
        }
    }

    render(){
        return(
            <>
                <div className="search-bar">
                    <h1 className="text-white shadow-lg">Find hotels by selecting your trip city</h1>
                    <select className="form-control shadow-lg" onChange={this.cityChangeHandler}>
                        <option value="">Select City</option>
                        {
                            this.state.allCity && this.state.allCity.map((city, idx) => {
                                return(<option value={city._id} key={idx}>{city.city_name}</option>)
                            })
                        }
                    </select>
                </div>
            </>
        )
    }
}

export default withRouter(Search)