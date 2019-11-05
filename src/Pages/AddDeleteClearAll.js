import React from 'react';

const AddDeleteClearAll = (props) =>{
    const List = props.adding.map((img,index)=>{
        return <img key={index} className="image" src={img} alt=""/>
    })

    // const clearList = props.clear.map((img,index)=>{
    //     return <img key={index} className="image" src={img} alt=""/>
    // })
    return(
        <div>
            <h1></h1>
            <button onClick={props.clearList}>Clear List!</button>
            <p></p>
            <div>
            {List}
        </div>
        </div>
    );
}

export default AddDeleteClearAll;