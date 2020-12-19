import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home/Index'
import TripList from './TripList/Index'

const Routing = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Route path="/" exact component={Home} />
            <Route path="/list_by_trip/:id" component={TripList} />
            <Route path="/list_by_city/:id" component={TripList} />
            <Footer/>
        </BrowserRouter>
    )
}
export default Routing