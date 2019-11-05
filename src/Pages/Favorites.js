import React from 'react';

const Favorites = (props) =>{
    console.log('hi')
    const allImage = props.fave.map((img,index)=>{
        return <img key={index} className="image" src={img} alt=""/>
    })
    console.log(allImage)
    return(
        <div>
            {allImage}
        </div>
    );
}

export default Favorites;