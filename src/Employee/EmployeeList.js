import Employeedetails from "./Employeedetails";
import './EmployeeList.css'
const EmployeeList = props => {
    
    if(props.details.length===0) {
        return <h2 className="employee-list__fallback">Found No Employee</h2>
    }

    return (
        <ul className="employee-list">
            {
                props.details.map((employee)=> (<Employeedetails 
                    key={employee.id} 
                    name={employee.name} 
                    exp={employee.exp}
                    dob={employee.dob}
                    employeeID={employee.id}/>))
            }
        </ul>
    )
}

export default EmployeeList;