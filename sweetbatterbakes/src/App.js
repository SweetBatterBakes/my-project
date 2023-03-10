import ContactUs from "./pages/contactus/ContactUs";
import AboutUs from "./pages/aboutus/AboutUs.js";
import Home from "./pages/home/Home.js";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./pages/products/Products";
import {Container, Navbar, Nav} from "react-bootstrap"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import companyLogo from "/Users/zainab/Documents/GitHub/SweetBatterBakes.github.io/sweetbatterbakes/src/images/sbb_sqlogoclear.png";
import { BsInstagram } from "react-icons/bs";
import {BsFillHeartFill} from "react-icons/bs"
function App() {
  return (
     <Router>
      <Navbar className="top" expand = "lg" bg-abwhite>
      <Container>
        <Navbar.Brand href="/">
            <img className = "app-logo" src = {companyLogo} alt = " Sweet Batter Bakes"  />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className = "dropDown">
          <Nav className="me-auto justify-content-between w-25 ">
            <Nav.Link href="/" className = "nav-item" class = "nav-item nav-link ">HOME</Nav.Link>
            <Nav.Link href="/about" className = "nav-item" class = "nav-item nav-link " >ABOUT </Nav.Link>
           
            <Nav.Link href="/contact"  className = "nav-item" class = "nav-item nav-link" >CONTACT</Nav.Link>
            <Nav.Link href="/products" className = "nav-item" class = "nav-item nav-link " >PRODUCTS</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
        <a class="link d-none d-lg-block" href="https://www.instagram.com/sweetbatterbakes/" >
        <BsInstagram/>
        </a>
        
      </Container>
      
      </Navbar>
      <Routes>

        <Route exact path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<AboutUs />}/>
        <Route path = "/contact" element = {<ContactUs />}/>
        <Route path = "/products" element = {<Products />}/>
        
       
        
      </Routes>
      
    </Router>
   
   
  );
}

export default App;
