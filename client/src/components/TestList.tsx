import React, { useState } from "react";

interface Props {
    items: string[];
    heading: string;
}
function ListGroup({items, heading}: Props) {
    const [selectedIndex, updateIndex]=useState(-1);

    return (
        <><h1>{heading}</h1> 
            <ul className="list-group">
                {
                    items.map((item, index) => (<li className={index===selectedIndex? "list-group-item active": "list-group-item"} 
                    key={item} 
                    onClick={()=>{updateIndex(index)}}>
                    {item}</li>
                    ))
                }
            </ul>
        </>
    );
}
export default ListGroup;