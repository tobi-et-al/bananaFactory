import React from 'react'
import './Person.css'
const person = (props) => {
    return (<div className="Person" onClick={props.click}>
                <p> i 'm a {props.name} small person! I weigh { Math.floor(Math.random() * 30)} KG at {props.age} </p>
                <p>{props.children}</p>
                <input onChange={props.changed} />
            </div>
    )
};

export default person;