import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home/Index'
const Routing = () => {
    return(
        <BrowserRouter>
            <>
                <Navbar/>
                    <Route path="/" exact component={Home} />
                <Footer/>
            </>
        </BrowserRouter>
    )
}
export default Routing