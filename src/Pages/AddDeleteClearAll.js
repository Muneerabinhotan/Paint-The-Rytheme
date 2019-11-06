import React from 'react';

const AddDeleteClearAll = (props) =>{
    // new array to be added and button to delete it
    const List = props.adding.map((img,index)=>{
        return (<div> <img key={index} className="image" src={img} alt=""/>
        <button onClick={()=>props.deleteItem(img)}>Delete Item</button>
        </div> )
    })

    return(
        <div>
            <h2>List</h2>
            {/* show the added list */}
            {List}
            {/* clear all the list */}
            <button onClick={props.clearList}>Clear List!</button>

      
        </div>
    );
}

export default AddDeleteClearAll;