import React from 'react';
import First from '../science-and-charity.jpg';
import Second from '../night-fishing-at-antibes.jpg';
import Third from '../mediterranean-landscape.jpg';
import Fourth from '../young-ladies-on-the-bank-of-seine.jpg';

const Artist1 = (props) =>{
    return(
           <div>
                <h2>Pablo Picasso</h2>
                <img className="image" src={First} alt="f"/>
                <img className="image" src={Second} alt="s"/>
                <img className="image" src={Third} alt="t"/>
                <img className="image" src={Fourth} alt="f"/>
            

        </div>
    );
}

export default Artist1;