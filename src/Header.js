import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Employee from "./Employee";
import Home from "./Home";
const Header = () => {
    return (
        <div>
            <h1>Welcome to Car Rental App</h1>
            <h4>This is a service from WAL Team <b><u>#TeamDev</u></b> </h4>
            <BrowserRouter>
            <Link to="/" className="btn btn-primary col-lg-3 col-sm-3"> <b>Home</b></Link>
                <Link to='/aboutus' className="btn btn-primary col-lg-3 col-sm-3"> <b>About Us</b></Link>
                <Link to='/employees' className="btn btn-primary col-lg-3 col-sm-3"> <b>Employees</b></Link>
                <Link to="/contact" className="btn btn-primary col-lg-3 col-sm-3" ><b>Contact/Locate Us</b></Link>
                <Routes>
                    <Route path='/aboutus' element={<About />} />
                    <Route path='employees' element={<Employee />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Header;