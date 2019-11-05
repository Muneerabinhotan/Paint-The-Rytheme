import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./Pages/HomePage";
import AddDeleteClearAll from "./Pages/AddDeleteClearAll";
import Artist1 from "./Pages/Artist1";
import Artist2 from "./Pages/Artist2";
import {BrowserRouter as Router, Route,Switch, Link} from 'react-router-dom';
import Favorites from './Pages/Favorites.js';
import {Nav, NavDropdown,Navbar} from 'react-bootstrap';
import axios from  "axios";




class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      posts: [], //initializ an array that will store the posts inside the API's post data
      fav: [],
      add:[]
  }
}
favorite = (image) =>{
  this.setState({
      fav:[...this.state.fav,image] // ... copy the array || put it in image

  })
  console.log(this.state.fav)

}

addImage = (image) =>{
  this.setState({
      add:[...this.state.add,image] // ... copy the array || put it in image

  })
  console.log(this.state.add)

}


clearList = () =>{
  this.setState({
      add:[] 
  })
console.log("clicked");
}

componentDidMount(){
  axios.get('https://api.unsplash.com/photos?client_id=b2e1905fc110f9fc791016154a3f5302b1b56d2a8089f15d9d82b440838da1d9')
  .then(res => {
    console.log(res.data);
    this.setState({ //give it data
      posts: res.data // insert the data to posts[]
    })
  })
  .catch(err => {
      console.log(err);
  })
}


  render() {
    return (
 
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand><Link className="link" to="/">Paint The Rytheme</Link></Navbar.Brand> 
          <Nav className="mr-auto">                                    
            <Nav.Link><Link className="link" to="/AddDeleteClearAll">Edit</Link></Nav.Link>
            <Nav.Link><Link className="link" to="/Favorites">Favorites</Link></Nav.Link>
              <NavDropdown title="Artists" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/">Pablo Picasso</Link> </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><Link to="/">Vincent Van Gogh</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav> 
            
             </Navbar>
        
        
        
<Switch>
          <Route exact path='/' component={ () => <HomePage addImage={this.addImage} favorite={this.favorite} posts={this.state.posts} /> }/>
          <Route path='/AddDeleteClearAll' component={ () => <AddDeleteClearAll  clearList={this.state.add} adding={this.state.add}/>}/>
          <Route path='/Favorites' component={ () =><Favorites fave={this.state.fav} />}/>
          <Route path='/Artist1' component={Artist1}/>
          <Route path='/Artist2' component={Artist2}/>
          
</Switch>
          </Router>

      );
  }}

export default App;
