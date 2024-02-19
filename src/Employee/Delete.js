import "./EmployeeList.css"
import { employeeActions, deleteEmployeeData } from '../Store';
import { UseSelector, useDispatch, useSelector } from 'react-redux';

const DeleteData = (props) =>{
const dispatch = useDispatch();
const deleteEmployeeHandler = () => {
  dispatch(employeeActions.removeEmployee(props.employeeID));
  dispatch(deleteEmployeeData(props.employeeID));
  
}
    return (
<button type="button" className="delete" onClick={deleteEmployeeHandler}>Delete</button>
    )
  }
export default DeleteData;