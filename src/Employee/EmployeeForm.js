import { useState } from "react";
import './EmployeeForm.css'
import { useContext } from "react";
import { EmployeeContext } from "./employee-context";
import { useDispatch } from "react-redux";
import { employeeActions } from "../Store";

const EmployeeForm = (props) => {

    // const {onSaveEmployeeData} = useContext(EmployeeContext);
    const dispatch = useDispatch();
    
    const [entertedname, setEnteredName] = useState('');
    const [entertedexp, setEnteredExp] = useState('');
    const [enterteddob, setEnteredDob] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const expChangedHandler = (event) => {
        setEnteredExp(event.target.value);
    }

    const dobChangedHandler = (event) => {
        setEnteredDob(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        const employeeData = {
            name: entertedname,
            exp: entertedexp,
            dob: new Date(enterteddob)
        }

        // console.log(expenseData);
        // props.onSaveEmployeeData(employeeData)
        // onSaveEmployeeData(employeeData);
        // dispatch({type:"ADD_EMPLOYEE",payload: employeeData});
        dispatch(employeeActions.addEmployee(employeeData));

        setEnteredName('');
        setEnteredExp('');
        setEnteredDob('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-employee__controls">
                <div className="new-employee__control">
                    <label>Name</label>
                    <input type="text" onChange={nameChangeHandler} value={entertedname}/>
                </div>

                <div className="new-employee__control">
                    <label>Experience</label>
                    <input type="number" min="1" max='20' step="1" onChange={expChangedHandler} value={entertedexp}/>
                </div>

                <div className="new-employee__control">
                    <label>Date of Brith</label>
                    <input type="date" min="1995-01-01" max="2005-01-01" onChange={dobChangedHandler} value={enterteddob}/>
                </div><br/>
                <div className="new-employee__control">
                    <button type="submit" >Add Employee</button>
                </div>
            </div>
        </form>
    );
}

export default EmployeeForm;