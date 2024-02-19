import React, { useState } from 'react';
import Employeedob from './Employeedob';
import './Employeedetails.css'
import Card from '../UI/card';

const Employeedetails = (props) => {
    // let title= props.title;
    const [name, setName] = useState(props.name);
    
    const clickHandler = () => {
        console.log('Clicked...');
        setName('changed...');
    }
    return(
        <Card className='emp-item'>
                    <Employeedob dob = {props.dob}/>
                <div className='emp-item_description'>
                        <h2>{name}</h2>
                        <div className='emp-item_price'>Experience  - {props.exp} years</div>
                </div>
        </Card>
    )
}

export default Employeedetails;