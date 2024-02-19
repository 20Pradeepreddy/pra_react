import React, { useState } from 'react';
import Employeedob from './Employeedob';
import './Employeedetails.css'
import Card from '../UI/card';
import Delete from './Delete';


const Employeedetails = (props) => {
    const [name, setname] = useState(props.name);
    return(
        <Card className='emp-item'>
                    <Employeedob dob = {props.dob}/>
                <div className='emp-item_description'>
                        <h2>{name}</h2>
                        <div className='emp-item_price'>Experience  - {props.exp} yrs</div>
                        <Delete employeeID = {props.employeeID}/>
                </div>
        </Card>
    )
}

export default Employeedetails;