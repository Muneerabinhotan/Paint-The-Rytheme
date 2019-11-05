import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
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
           <h2>Discover The World Of Art</h2>
            <p></p>
            {/* Condition for the images */}
            {this.props.posts.length == 0 ? <h2>Loading </h2> : (
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-75 mx-auto"src={this.props.posts[0].urls.regular} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-75 mx-auto"src={this.props.posts[1].urls.regular} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-75 mx-auto"src={this.props.posts[2].urls.regular} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            )}
            <div>
                <h2>Pablo Picasso</h2>
                <div>
                   <img className="image" src={First} alt="f"/>
                   <button onClick={(e)=>this.props.favorite(First)}>fave</button> 
                </div>
                <div>
                   <img className="image" src={Second} alt="f"/>
                   <button onClick={(e)=>this.props.favorite(Second)}>fave</button> 
                </div><div>
                   <img className="image" src={Third} alt="f"/>
                   <button onClick={(e)=>this.props.favorite(Third)}>fave</button> 
                </div><div>
                   <img className="image" src={Fourth} alt="f"/>
                   <button onClick={(e)=>this.props.favorite(Fourth)}>fave</button> 
                </div>
                    
                <h2>Vincent Van Gogh</h2>
                <img className="image" src={Fifth} alt="f"/>
                <button onClick={(e)=>this.props.favorite(Fifth)}>fave</button> 

                <img className="image" src={Sixth} alt="s"/>
                <button onClick={(e)=>this.props.favorite(Sixth)}>fave</button> 

                <img className="image" src={Seventh} alt="t"/>
                <button onClick={(e)=>this.props.favorite(Seventh)}>fave</button> 

                <img className="image" src={Eight} alt="f"/>
                <button onClick={(e)=>this.props.favorite(Eight)}>fave</button> 

    

            </div>
        </div>
    );}
}

export default HomePage;