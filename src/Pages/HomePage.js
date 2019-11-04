import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import first from '../p.jpg';

const HomePage = (props) =>{
    return(
        <div>
            {/* <h1>Paint The Rytheme</h1> */}
            <p></p>
            <h2>Discover The World Of Art</h2>
            <p></p>
            
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-75 mx-auto"src={first} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-75 mx-auto"src={first} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-75 mx-auto"src={first} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default HomePage;