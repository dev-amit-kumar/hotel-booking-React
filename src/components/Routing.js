import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home/Index'
import HotelListByTrip from './HotelsList/HotelListByTrip'
import HotelDetail from './HotelsList/HotelDetail'

const Routing = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Route path="/" exact component={Home} />
            <Route path="/hotellist/:id" component={HotelListByTrip} />
            <Route path="/hotel/:id" component={HotelDetail} />
            <Footer/>
        </BrowserRouter>
    )
}
export default Routing