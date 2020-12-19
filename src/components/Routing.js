import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home/Index'
import HotelList from './Hotel/HotelList'

const Routing = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Route path="/" exact component={Home} />
            <Route path="/list/:id" component={HotelList} />
            <Footer/>
        </BrowserRouter>
    )
}
export default Routing