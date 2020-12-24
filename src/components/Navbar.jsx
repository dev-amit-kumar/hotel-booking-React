import { Link } from 'react-router-dom'
import '../css/Navbar.css'
const Navbar = () => {
    return(
        <nav className="navbar">
            <Link to="/" className="navbar-brand">Trip-Go</Link>
            <form className="form-inline">
                <label className="btn btn-dark my-2 my-sm-0 shadow-lg">Plan your trip with us</label>
            </form>
        </nav>
    )
}
export default Navbar