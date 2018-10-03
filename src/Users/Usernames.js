import React from 'react';
import "./Users.css";



const userOutput = (props) => {
    return (
        <div className="output">
            <p>Username: </p>
            <p>{props.username}</p>
        </div>
    )
};

export default userOutput;