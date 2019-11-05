import React from 'react';
import Fifth from '../van.jpg';
import Sixth from '../van-gogh-sunflowers.jpg';
import Seventh from '../gogh.jpg';
import Eight from '../home.jpg';

const Artist2 = (props) =>{
    return(
        <div>
        <h2>Vincent Van Gogh</h2>
        <img className="image" src={Fifth} alt="f"/>
        <img className="image" src={Sixth} alt="s"/>
        <img className="image" src={Seventh} alt="t"/>
        <img className="image" src={Eight} alt="f"/>
    

</div>
    );
}

export default Artist2;