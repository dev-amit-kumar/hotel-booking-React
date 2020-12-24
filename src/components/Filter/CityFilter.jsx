import React,{Component} from 'react';
import '../../css/Filter.css'

const cityUrl = 'https://developerfunnel.herokuapp.com/location'

class CityFilter extends Component{
    constructor(props){
        super(props)
        this.state = {
            allCity: ''
        }
    }

    componentDidMount(){
        fetch(cityUrl,{method: 'GET'})
        .then((response) => response.json())
        .then((response) => {
            this.setState({allCity: response})
        })
    }

    filterLogic = (event) => {
        let cityId = event.target.value;
        this.props.cityFilter(cityId)
    }
    
    render(){
        return(
            <div className="filterDiv">
                <h6><b>City Filter</b></h6>
                <div className="filter" onChange={this.filterLogic}>
                    <label className="radio">
                        <input type="radio" value="" name="city"/>All
                    </label>
                    {this.state.allCity && 
                        this.state.allCity.map((city,idx) => {
                            return(
                                <label className="radio" key={idx}>
                                    <input type="radio" value={city._id} name="city"/>{city.city_name}
                                </label>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default CityFilter