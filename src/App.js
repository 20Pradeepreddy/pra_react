// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Employee from './Employee/Employee';
import NewEmployee from './Employee/NewEmployee';
import EmployeeForm from './Employee/EmployeeForm';
import { EmployeeContext } from './Employee/employee-context';
import EmployeeContextProvider from './Employee/employee-context';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { sendEmployeeData } from './Store';


  const App = () => {

    const items = useSelector(state => state.items);
    const dispatch = useDispatch();
    useEffect(
      () => {
        dispatch(sendEmployeeData(items))
      },
      [items, dispatch]
    );

  return (
    <EmployeeContextProvider>
    <div>
       <NewEmployee>  
        <EmployeeForm />
       </NewEmployee> 
        <Employee />
    </div>
    </EmployeeContextProvider>
  );
}

export default App;
