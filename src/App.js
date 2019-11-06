import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./Pages/HomePage";
import AddDeleteClearAll from "./Pages/AddDeleteClearAll";
import Favorites from './Pages/Favorites.js';
import Artist1 from "./Pages/Artist1";
import Artist2 from "./Pages/Artist2";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Nav, NavDropdown,Navbar} from 'react-bootstrap';
import axios from  "axios";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [], //initializ an array that will store the posts inside the API's post data
      fav: [], //initializ an array that will store the favorite paintings and show it in Favorite Page
      add:[] //initializ an array that will store the paintings in List Page "used in adding,deleting and clear all"
  }
}
favorite = (image) =>{
  // console.log("clicked");
  this.setState({
      fav:[...this.state.fav,image] // ... copy the array || put it in image

  })
  console.log(this.state.fav);
}

addImage = (image) =>{
  this.setState({
      add:[...this.state.add,image] // ... copy the array 
  })
  console.log(this.state.add);

}

clearList = () =>{
  console.log("clicked");
  
  this.setState({
    add:[] // clear the list
  })
}

deleteItem = (e) =>{ // 
  console.log("clicked");
  console.log(e);
  const add=[...this.state.add] // ... copy the array 
  const index = add.indexOf(e); // use the index to delete one item
  add.splice(index,1) // delete it

  this.setState({add}) 
}

componentDidMount(){
  axios.get('https://api.unsplash.com/search/photos?query=museum&gallery&client_id=b2e1905fc110f9fc791016154a3f5302b1b56d2a8089f15d9d82b440838da1d9')
  .then(res => {
    console.log(res.data);
    this.setState({ //give it data
      posts: res.data.results // insert the data to posts[]
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
          <Nav.Link><Link className="link" to="/AddDeleteClearAll">List</Link></Nav.Link>
          <Nav.Link><Link className="link" to="/Favorites">Favorites</Link></Nav.Link>
          <NavDropdown title="Artists" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to="/Artist1">Pablo Picasso</Link> </NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item><Link to="/Artist2">Vincent Van Gogh</Link></NavDropdown.Item>
          </NavDropdown>
        </Nav> 
      </Navbar>
        
    <Route exact path='/' component={ () => <HomePage 
    addImage={this.addImage} 
    favorite={this.favorite} 
    posts={this.state.posts}/>}/>

    <Route path='/AddDeleteClearAll' component={ () => <AddDeleteClearAll 
    deleteItem={this.deleteItem} 
    clearList={this.clearList} 
    adding={this.state.add}/>}/>

    <Route path='/Favorites' component={ () => <Favorites fave={this.state.fav} />}/>
    <Route path='/Artist1' component={Artist1}/>
    <Route path='/Artist2' component={Artist2}/>
          
    </Router>

    );
  }}

export default App;
