import React, { useState } from 'react';
import Employeedob from './Employeedob';
import './Employeedetails.css'
import Card from '../UI/card';
import { employeeActions, deleteEmployeeData } from '../Store';
import { UseSelector, useDispatch, useSelector } from 'react-redux';

const Employeedetails = (props) => {
    // let title= props.title;
    const dispatch = useDispatch();

    const [name, setName] = useState(props.name);
    
    const clickHandler = () => {
        console.log('Clicked...');
        setName('changed...');
    }
    const deleteEmployeeHandler = () => {
        dispatch(deleteEmployeeData(props.deleteID));
    }

    return(
        <Card className='emp-item'>
                    <Employeedob dob = {props.dob}/>
                <div className='emp-item_description'>
                        <h2>{name}</h2>
                        <div className='emp-item_price'>Experience  - {props.exp} years</div>
                        <button onClick={deleteEmployeeHandler}>Delete</button>
                </div>
        </Card>
    )
}

export default Employeedetails;