import React from 'react';
import "./button.css"

const Button = (props) => {
    return (
        <a className="button" href={props.link} >
            <p>{props.text}</p>
        </a>
    )
}

export default Button;
