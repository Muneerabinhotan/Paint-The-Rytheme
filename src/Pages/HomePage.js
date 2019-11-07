import React, { Component } from 'react';
import {Carousel, Spinner} from 'react-bootstrap';
import First from '../science-and-charity.jpg';
import Second from '../night-fishing-at-antibes.jpg';
import Third from '../mediterranean-landscape.jpg';
import Fourth from '../young-ladies-on-the-bank-of-seine.jpg';
import Fifth from '../van.jpg';
import Sixth from '../van-gogh-sunflowers.jpg';
import Seventh from '../gogh.jpg';
import Eight from '../home.jpg';

class HomePage extends Component{
   
    render(){
    return(
        <div>
           <h2>Discover The World Of Art ! </h2>
           {/* Condition for the Carousel to show loading item until the images added to the array */}
            {this.props.posts.length == 0 ? <div>
                <div class="d-flex justify-content-center">
                <Spinner animation="border" variant="secondary" size="lg"/></div>
                <h2>Loading.. </h2></div> : (


            <Carousel>
                <Carousel.Item>
                    <img height={600} className="d-block w-75 mx-auto" src={this.props.posts[0].urls.regular} alt="First slide"/>
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <img height={600} className="d-block w-75 mx-auto" src={this.props.posts[1].urls.regular} alt="First slide"/>
                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <img height={600} className="d-block w-75 mx-auto" src={this.props.posts[3].urls.regular} alt="First slide"/>
                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
            )}
            
            <div>
                <h3>Pablo Picasso</h3>
                <div>
                    <div className="img-container">
                        <img className="image" src={First} alt="f"/>
                        <button className='btn btn-warning btnd' onClick={()=>this.props.favorite(First)} >Favorite</button>  
                    </div> 
                   <button onClick={()=>this.props.addImage(First)}>Add</button> 
                </div>      

                <div>
                    <div className="img-container">
                        <img className="image" src={Second} alt="f"/>
                       <button className='btn btn-warning btnd' onClick={()=>this.props.favorite(Second)}>Favorite</button> 
                    </div> 

                   <button onClick={()=>this.props.addImage(Second)}>Add</button> 

                </div>
                <div>
                    <div className="img-container">
                        <img className="image" src={Third} alt="f"/>
                        <button className='btn btn-warning btnd' onClick={()=>this.props.favorite(Third)}>Favorite</button> 
                    </div>
                   <button onClick={()=>this.props.addImage(Third)}>Add</button> 

                </div>
                <div>
                    <div className="img-container">
                        <img className="image" src={Fourth} alt="f"/>
                        <button className='btn btn-warning btnd' onClick={()=>this.props.favorite(Fourth)}>Favorite</button> 
                    </div>
                   <button onClick={()=>this.props.addImage(Fourth)}>Add</button> 

                </div>
                    
                <h3>Vincent Van Gogh</h3>
                <div>
                    <div className="img-container">
                        <img className="image" src={Fifth} alt="f"/>
                        <button className='btn btn-warning btnd' onClick={()=>this.props.favorite(Fifth)}>Favorite</button> 
                </div>
                <button onClick={()=>this.props.addImage(Fifth)}>Add</button> 

                </div>
                <div>
                    <div className="img-container">
                        <img className="image" src={Sixth} alt="s"/>
                        <button className='btn btn-warning btnd' onClick={()=>this.props.favorite(Sixth)}>Favorite</button> 
                    </div>
                <button onClick={()=>this.props.addImage(Sixth)}>Add</button> 
                </div>
                <div>
                    <div className="img-container">
                        <img className="image" src={Seventh} alt="t"/>
                        <button className='btn btn-warning btnd' onClick={()=>this.props.favorite(Seventh)}>Favorite</button>
                    </div> 
                <button onClick={()=>this.props.addImage(Seventh)}>Add</button> 
                </div>
                <div>
                    <div className="img-container">
                        <img className="image" src={Eight} alt="f"/>
                        <button className='btn btn-warning btnd' onClick={()=>this.props.favorite(Eight)}>Favorite</button> 
                    </div>
                <button  onClick={()=>this.props.addImage(Eight)}>Add</button> 
                </div>
            </div> 

        </div>
    );}
}

export default HomePage;