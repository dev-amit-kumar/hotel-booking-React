import React from 'react'
import Search from './Search'
import TripType from './TripType'

class Home extends React.Component{
    render(){
        return(
            <>
                <Search/>
                <TripType/>
            </>
        )
    }
}

export default Home