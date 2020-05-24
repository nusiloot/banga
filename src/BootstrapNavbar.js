import React from 'react'
import logo from './pics/toutpetit.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap'
import Home from './components/Home';
import Profile from './components/Profile';
import Challenge from './components/Challenges';
import Cve from './components/Cve';


class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12 ">
                        <Router>
                            <Navbar bg="black" variant="dark" expand="lg" sticky="top" className="changeMe" >
                                <Navbar.Brand href="/" className="text-white logo-text"><img src={logo} alt="Logo" /> | {this.props.pseudo}</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                    <Nav className="mr-auto" className="justify-content-end">
                                    <Nav.Link href="/" className="text-white logo-text">Home</Nav.Link > | 
                                    <Nav.Link href="/Profile" className="text-white logo-text">Profile</Nav.Link> | 
                                    <Nav.Link href="/Challenges" className="text-white logo-text"> My challenges</Nav.Link> | 
                                    <Nav.Link href="/Cve" className="text-white logo-text">CVE</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                           
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/Profile">
                                    <Profile name="Profile"/>
                                </Route>
                                <Route path="/Challenges">
                                    <Challenge name="My challenges"/>
                                </Route>
                                <Route path="/Cve">
                                    <Cve name="CVE"/>
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;