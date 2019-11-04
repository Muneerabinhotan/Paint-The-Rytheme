import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./Pages/HomePage";
import AddDeleteClearAll from "./Pages/AddDeleteClearAll";
import Artist1 from "./Pages/Artist1";
import Artist2 from "./Pages/Artist2";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Favorites from './Pages/Favorites';
import {Nav, NavDropdown,Navbar} from 'react-bootstrap';



class App extends Component {
  render() {
    return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Paint The Rytheme</Navbar.Brand> 
          <Nav className="mr-auto">                                    
            <Nav.Link href="/AddDeleteClearAll">Edit</Nav.Link>
            <Nav.Link href="/Favorits">Favorites</Nav.Link>
              <NavDropdown title="Artist" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Artist1">1</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Artist1">2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar>
        
        <div>
        <Router>

          <Route exact path='/' component={HomePage}/>
          <Route path='/AddDeleteClearAll' component={AddDeleteClearAll}/>
          <Route path='/Favorites' component={Favorites}/>
          <Route path='/Artist1' component={Artist1}/>
          <Route path='/Artist2' component={Artist2}/>
          </Router>

          </div>
    </div>  
      );
  }}

export default App;
