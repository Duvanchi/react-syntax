import React from 'react';
import "./Users.css";


const userInput = (props) => {
    return (
        <div className="input">
            <p>{props.username}</p>
           <input type="text" onChange={props.changed} value={props.username}></input> 
        </div>
    )
};

export default userInput;