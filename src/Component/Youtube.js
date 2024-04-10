import React from 'react';
import "../../src/App.css";
function Youtube(props) {
    return (
        <div>
            <img src={props.img} alt="" />
            <h2>{props.title}</h2>
            <p>{props.channel}</p>
            <span>{props.view}</span>
        </div>
    );
};

export default Youtube;