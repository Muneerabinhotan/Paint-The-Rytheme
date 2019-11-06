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

    // console.log(props.posts);
   
    render(){
    return(
        <div>
            {/* <h1>Paint The Rytheme</h1> */}
            <p></p>
           <h2>Discover The World Of Art ! </h2>
            <p></p>
            {/* Condition for the images */}
            {this.props.posts.length == 0 ? <div> <div class="d-flex justify-content-center">
                <Spinner animation="border" variant="secondary" size="lg"/></div>
                <h2>Loading.. </h2></div> : (


            <Carousel>
                <Carousel.Item>
                    <img height={750} className="d-block w-75 mx-auto" src={this.props.posts[0].urls.regular} alt="First slide"/>
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <img height={750} className="d-block w-75 mx-auto" src={this.props.posts[1].urls.regular} alt="First slide"/>
                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <img height={750} className="d-block w-75 mx-auto" src={this.props.posts[2].urls.regular} alt="First slide"/>
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
                        <button className='btn btn-warning btnd' onClick={(e)=>this.props.favorite(First)} >favorite</button>  
                    </div> 
                   <button onClick={(e)=>this.props.addImage(First)}>Add</button> 
                </div>      

                <div>
                    <div className="img-container">
                        <img className="image" src={Second} alt="f"/>
                       <button className='btn btn-warning btnd' onClick={(e)=>this.props.favorite(Second)}>favorite</button> 
                    </div> 

                   <button onClick={(e)=>this.props.addImage(Second)}>Add</button> 

                </div>
                <div>
                    <div className="img-container">
                        <img className="image" src={Third} alt="f"/>
                        <button className='btn btn-warning btnd' onClick={(e)=>this.props.favorite(Third)}>favorite</button> 
                    </div>
                   <button onClick={(e)=>this.props.addImage(Third)}>Add</button> 

                </div>
                <div>
                    <div className="img-container">
                        <img className="image" src={Fourth} alt="f"/>
                        <button className='btn btn-warning btnd' onClick={(e)=>this.props.favorite(Fourth)}>favorite</button> 
                    </div>
                   <button onClick={(e)=>this.props.addImage(Fourth)}>Add</button> 

                </div>
                    
                <h3>Vincent Van Gogh</h3>
                <div>
                    <div className="img-container">
                        <img className="image" src={Fifth} alt="f"/>
                        <button className='btn btn-warning btnd' onClick={(e)=>this.props.favorite(Fifth)}>favorite</button> 
                </div>
                <button onClick={(e)=>this.props.addImage(Fifth)}>Add</button> 

                </div>
                <div>
                    <div className="img-container">
                        <img className="image" src={Sixth} alt="s"/>
                        <button className='btn btn-warning btnd' onClick={(e)=>this.props.favorite(Sixth)}>favorite</button> 
                    </div>
                <button onClick={(e)=>this.props.addImage(Sixth)}>Add</button> 
                </div>
                <div>
                    <div className="img-container">
                        <img className="image" src={Seventh} alt="t"/>
                        <button className='btn btn-warning btnd' onClick={(e)=>this.props.favorite(Seventh)}>favorite</button>
                    </div> 
                <button onClick={(e)=>this.props.addImage(Seventh)}>Add</button> 
                </div>
                <div>
                    <div className="img-container">
                        <img className="image" src={Eight} alt="f"/>
                        <button className='btn btn-warning btnd' onClick={(e)=>this.props.favorite(Eight)}>favorite</button> 
                    </div>
                <button  onClick={(e)=>this.props.addImage(Eight)}>Add</button> 
                </div>
            </div> 

        </div>
    );}
}

export default HomePage;