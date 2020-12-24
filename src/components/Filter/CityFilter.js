import React,{Component} from 'react';
import '../../css/Filter.css'

const cityUrl = 'https://developerfunnel.herokuapp.com/location'

class CityFilter extends Component{
    constructor(){
        super()
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
    
    render(){
        return(
            <React.Fragment>
                <h4><b>City Filter</b></h4>
                <div className="filter">
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    {this.state.allCity && 
                        this.state.allCity.map((city) => {
                            return(
                                <label className="radio" key={city.id}>
                                    <input type="radio" value={city.id} name="room"/>{city.city_name}
                                </label>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}


export default CityFilter