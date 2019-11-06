import React from 'react';

const Favorites = (props) =>{
    console.log('hi')
        // new array to be added as favorite 
    const allImage = props.fave.map((img,index)=>{
        return <img key={index} className="image" src={img} alt=""/>
    })
    console.log(allImage)
    return(
        <div>
         <h2>Favorites</h2>
            {/* show the added list */}
            {allImage}
        </div>
    );
}

export default Favorites;