import EmployeeForm from './EmployeeForm';
import './Employee.css'
import Card from "../UI/card";
import Employeedob from './Employeedob';
import Employeedetails from "./Employeedetails";
import EmployeeFilter from './EmployeeFilter';
import { useState, useContext } from 'react';
import EmployeeList from './EmployeeList';
import { EmployeeContext } from './employee-context';
import { useSelector } from 'react-redux';

const Employee = (props)=> {

    // const employeeCtx = useContext(EmployeeContext);

    const items = useSelector(state => state.items);

    const[filteredYear, setFilteredYear] = useState('2020');

    const filterchangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    }

    const filteredEmployee = items.filter(employee => {
      // return employee.dob.getFullYear().toString() === filteredYear;
      return employee.exp.toString() === filteredYear;
    });

    return(
      <Card className="employee">
            <EmployeeFilter selected = {filteredYear} onChangeFilter={filterchangeHandler}/>

            <EmployeeList details = {filteredEmployee}/>
      </Card>
    );
}

export default Employee;