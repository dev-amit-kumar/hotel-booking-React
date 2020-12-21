import React from 'react'
import Search from './Search'
import TripType from './TripType'
const TripTypeUrl ="https://developerfunnel.herokuapp.com/booking"
const cityUrl = 'https://developerfunnel.herokuapp.com/location'

class Index extends React.Component {
    constructor(){
        super()
        this.state = {
            tripTypeData: '',
            allCity: ''
        }
    }
    render(){
        if(this.state.tripTypeData && this.state.allCity){
            return(
                <>
                    <Search allCity={this.state.allCity}/>
                    <TripType tripTypeData={this.state.tripTypeData}/>
                </>
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
        fetch(TripTypeUrl,{method: 'GET'})
        .then((response) => response.json())
        .then((data) => {
            this.setState({tripTypeData: data})
        })

        fetch(cityUrl,{method: 'GET'})
        .then((response) => response.json())
        .then((city) => {
            this.setState({allCity: city})
        })
    }
}

export default Index